import React from 'react'
 import ReactDOM  from 'react-dom'
function Greeting(){
return <h2>this is first component</h2>
}

ReactDOM.render(<Greeting/>, document.getElementById('root'))