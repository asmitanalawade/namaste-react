import React from 'react';
import ReactDOM  from 'react-dom/client';

// Using React.createElement we can give 3 arguments 
// 1 - Element Tag
// 2 - {} provides attribute like class, id, style etc.
// 3 - content
// React.createElement is an object ===> HTML(browser undertsnad)

// const heading = React.createElement("h1", {}, "Hello World using React!!");
// console.log(heading); // Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);  //render() is used here to get the heading object and convert it in html, put it in DOM which browser understand and pass in root.

// Example 2: Below code write in React

{/* <div class="parent">
    <div class="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div class="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",
{className: "parent"},
[React.createElement("div", {className: "child1"}, 
[React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag")]),
React.createElement("div", {className: "child1"}, 
[React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag")])]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // In each component there is only one render on root. If we add two render the it render the last content only.




