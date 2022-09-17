// ReactDOM.render(<h1>Hello React world</h1>, document.getE("root"));

// second phase
// const h1 = document.createElement("h1")
// h1.textContent = "Hello React worrrld"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)
  
 
//Note: function (first element, second element)

// third phase (another way of writing react lines)

// ReactDOM.render(
//   <div>
    
//     <ul><h1>Navbar</h1>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>

//   </div>, document.getElementById("root")
// )


// do it yourself
// import React from "react"
// import ReactDOM from "react-dom"

//  note that this is written as regular javascript (camelcasing)
//  and not react pascal casings in the next section

// const page = (
//   <div>
//     <img src="./react-logo.png" width="40px"/>

//     <h1>Fun Facts About React</h1>
//     <ul>
//       <li>was first released in 2013</li>
//       <li>was originally created by jordan walke</li>
//       <li>Has well over 100k stars on Github </li>
//       <li>is maintained by facebook </li>
//        <li>Power thousands of enterprise apps, including mobile applications</li>

//     </ul>
//   </div>

// )
// ReactDOM.render(page, document.getElementById("root"));

// this is a proper react with pascal casing and format

// function TemporaryName() {

//   return (
//     <div>
//       <img src="./react-logo.png" width="40px" />

//       <h1>Fun Facts About React</h1>
      // <ul>
      //   <li>was first released in 2013</li>
      //   <li>was originally created by jordan walke</li>
      //   <li>Has well over 100k stars on Github </li>
      //   <li>is maintained by facebook </li>
      //   <li>Power thousands of enterprise apps, including mobile applications</li>

      // </ul>
//       <p>LEARN AM IF E EASY</p>
//     </div>
//   )
// };
// ReactDOM.render (<TemporaryName />, document.getElementById('root'));

// Another test



import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import MainContent from './Main.js';
import Footer from './footer';
import "./index.css"


function Page() {
  return (
    <div className='body-content'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
ReactDOM.render(<Page />, document.getElementById('root'));