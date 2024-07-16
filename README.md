# namaste-react



 Using React.createElement we can give 3 arguments 
 1 - Element Tag
 2 - {} provides attribute like class, id, style etc.
 3 - content
 React.createElement is an object ===> HTML(browser undertsnad)

 const heading = React.createElement("h1", {}, "Hello World using React!!");
 console.log(heading); // Object

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);  //render() is used here to get the heading object and convert it in html, put it in DOM which browser understand and pass in root.

 Example 2: Below code write in React

 <div class="parent">
    <div class="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div class="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> 

 const parent = React.createElement("div",
 {className: "parent"},
 [React.createElement("div", {className: "child1"}, 
 [React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag")]),
 React.createElement("div", {className: "child1"}, 
 [React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag")])]
 )

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent); // In each component there is only one render on root. If we add two render the it render the last content only.


 // Functional Component

const elem = <span>Child element</span>

const Title = () => (
    <h1 className='head' tabIndex="5">
        {elem}
        Namaste  React using JSX
    </h1>
)

const TitleElement = (
    <h1>This is react element</h1>    
)

const HeadingComponent = () => (
    <div id='container'>
        <Title />
        {Title()}
        {TitleElement}
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)



--- If you have loop some list in JSX, we need to give a key property in html tag where we send data.
Example ==> 
            {
                resList.map(restaurent => (
                    <RestaurentCards key={restaurent.card.card.info.id} data={restaurent}/>
                ))
            }


# Namaste Food


/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search
 * - RestaurentContainer
 *      - RestaurentCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */


 Two types of Export/Import

 - Default Export/Import

 export default Component
 import Component from "path";

- Named/Variable Export/Import

 export const Component
 import {Component} from "path";


# React Hooks
(Normal JS utility function)

- useState()
- useEffect()