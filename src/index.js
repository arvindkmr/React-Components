import React from 'react';
import ReactDOM from 'react-dom';
function Greeting() {
  return <div> 
  <Person/>
  <h2>this is first component</h2>
  </div>;

}

const Person = () => {
	return <h2> this is a try to see nesting</h2>
}

// Nested Components . React Tools

// JSX rule 
//Return single element
//className instead of class
// use camelCase for HTML attributes
//Close every element
// we use the above format bcoz easy tio maintain the code and return

// const Greeting =() =>{
// 	return React.createElement(

// 	'p',{},React.createElement('h1', {}, 'Hello world'))
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));
