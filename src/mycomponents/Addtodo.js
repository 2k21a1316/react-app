import React, { useState } from 'react'

const Addtodo = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");

    // onChange={(e)=>{setTitle(e.target.value)}}due to this form can be able to fill 
    const submit=(e)=>{//e = event
e.preventDefault();//prevent to reload the page
        if(!title || !desc){alert("Title or Description can not be blank")}
        else{

            props.addTodo(title,desc);
        
// after getting value it bcomes vanish
// title="";
// desc="" constant is not changable
// so 
setTitle("")
setDesc("")
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" placeholder="Description"/>
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo
