import React from 'react'
import Todoitem from "./Todoitem";

// use js higher order method ,map function
{/* <Todoitem todo={props.todos[0]}/> */}
// map return array 
//  getting props from parent App.js and props having props.todo and props.onDelete 
const Todos = (props) => {
  return (
    <div className='container' >
<h3 className=' my-3'>Todos List</h3>
{props.todos.length===0?"No Todos to Display":
props.todos.map((todo)=>{return (<><Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>)})
}
 </div>
  )
}

export default Todos
