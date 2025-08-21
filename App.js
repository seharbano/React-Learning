import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return (
    <div>
      <h1 className="heading">React Learning smoothly</h1>
    </div>
  )
}
const SecondComponent = () => {
  return (
    <div className="bg-amber-100">
      <Title/>
      <h1 className="heading">Hi React 🚀</h1>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SecondComponent/>);










/* 
* <div id="parent">
* <div id="child ">
* <h1> i am h1 tag </h1>
* <h2> i am h2 tag </h2>
* </div>
* </div>
* 
*
*/

// const parent = React.createElement(
//     "div",
//     { id: "parent",
//         style: { backgroundColor: "black", padding: "20px" } 
//      },
//     React.createElement(
//       "div",
//       { id: "child",
//         style: { backgroundColor: "black", padding: "20px" } 
//        },
//       [
//         React.createElement("h1", { key: "h1",    style: { backgroundColor: "yellow",color:"red" ,  padding: "20px" }  }, "React Learning Start Now!"),
//         React.createElement("h2", { key: "h2" }, "i am h2 tag!")
//       ],
//       [
//         React.createElement("h1", { key: "h1",    style: { backgroundColor: "green",color:"white" ,  padding: "20px" }  }, "React Learning Start Now!"),
//         React.createElement("h2", { key: "h2" }, "i am h2 tag!")
//       ]
//     )
//   );
// console.log(parent);
// // const heading = React.createElement("h1", { id: "heading" }, "Hello World From React");

// // console.log(heading);//object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);