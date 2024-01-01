import React from "react";
import ReactDom from "react-dom/client";

// React.createElement => Object => HTMLElemet(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Deev Dive React 🚀"
);

console.log(heading);

// JSX -> it is like html and xml synatx

//  like react element  is this a valid ajavscript ? your js enginge does
// not understand JSx it understand ecmascrip es6

// React element
const jsxHeading = (
  <h1 classname="head" tabIndex="5">
    React Deep Dive
  </h1>
);
// JSX (transpiled before it reaches the JS Engine) -> PARCEL (Its manage and provide responsibility to ) - BABEL

// JSX => React.createElement => ReactElement-JS Object {babel responsibility } => HTMLElement(render)

// React Component
// Class Based Component
// Functional Component = its a normal js function
const Title = () => (
  <h1 classname="head" tabIndex="5">
    Title
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title></Title>
    <Title />
    {jsxHeading}
    {/* // component composition  -> calling component inside component */}
    <h1 classname="head" tabIndex="5">
      React functional component Deep Dive
    </h1>
  </div>
);

console.log(jsxHeading);

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(heading); // how you render element
root.render(<HeadingComponent />); // how you render Component

console.log(root);

// JSX -> is a javascript synatx which make easire to craete react element
