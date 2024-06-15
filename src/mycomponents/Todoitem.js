import React from 'react'
//props.onDelete,props,todo or destructuring todo , onDelete from props
// props getting from parent Todos.js
// todo created by Todos.js and onclick passed by parent todos.js from grandparent app.js
// just pass the reference not execution in onclick ondelete,not ondelete()
// dont pass the todo argument in onDelete function otherwise onclick execute it automatically during rendering

// so we can pass the arrow function with onDelete function onClick={onDelete}  
const Todoitem = ({todo,onDelete}) => {
  return (
    <div>
<h4>{todo.title}</h4> 
<p>{todo.desc}</p> 
<button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
  </div>
  )
}

export default Todoitem//default export
