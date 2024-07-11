import React from 'react';
import ReactDOM  from 'react-dom/client';

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


