import React from 'react'
 import ReactDOM  from 'react-dom'
function Greeting(){
return <h2>this is first component</h2>
}

// we use the above format bcoz easy tio maintain the code and return

// const Greeting =() =>{
// 	return React.createElement(
	
// 	'p',{},React.createElement('h1', {}, 'Hello world'))
// }


ReactDOM.render(<Greeting/>, document.getElementById('root'))