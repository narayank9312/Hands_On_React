/**
 *
 * nested
 *
 * <div id="parent">
  <div id="child">
    <h1>I'm h1 tag </h1>
  </div>
</div>;

 *
 *
 *ReactElement(Object) => HTML(Browser Understand)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm in h1 tag"),
    React.createElement("h2", {}, "I'm in h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
// this {} is the place where you give attribute to tags

//JSX

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
