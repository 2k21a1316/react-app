import About from './mycomponents/About'
// import logo from './logo.svg'; //fate color mean it is not used so we can remove it,opacity reduced
import './App.css';
// dont make header file 
// header and Header  is diff due to H in react where header is tag
// import header from "./mycomponents/header";
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
// import Todoitem from "./mycomponents/Todoitem";
import Todos from "./mycomponents/Todos";
// import {Todos} from "./mycomponents/Todos"; for name export 
import Addtodo from './mycomponents/Addtodo';

// too use state hook import it 
import React, { useState ,useEffect} from 'react';
// import { cleanup } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

// react bootstrap also can be used 
// convert into react js for emit 
// main file to build app 
//main component
// component are of two types function based and className based 
// jsx js syntax extention to combine dynamic js with html 
// we will do function based component 

// it is parent component 

// delete but dom is not updated so we should use state hook

function App(){
  let initTodo;
if(localStorage.getItem('todos')===null){
  initTodo=[]
}
else{
  initTodo=JSON.parse(localStorage.getItem('todos'))
}

  const onDelete=(todo)=>{
    console.log("i am on delete ",todo);
    // deleting this way in react does not work 
//let index=todos.indexOf(todo);
// todos.splice(index,1);

// deleting without reload page 
// filter is high order method 
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
localStorage.setItem('todos',JSON.stringify(todos));


  }

  const addTodo=(title,desc)=>{
    // setTitle(e.title)
    console.log("adding todo");
    let sno
    if(todos.length==0){
       sno=1;
    }
    else{

       sno =todos[todos.length-1].sno+1
    }
const myTodo={
  sno:sno,
  title:title,
  desc:desc
}
setTodos([...todos,myTodo])
console.log(myTodo)
// if(localStorage.getItem('todos')){
//   localStorage.setItem('todos',todos);
// }

 




  }
// let todos=[
  const [todos, setTodos] = useState(initTodo)//doing saving todo in localstorage and when refereshing
    
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));//ise call kardo
  },[todos]) //jese hi koi todos ko change kare vese hi
  
  
  
  
  
  
  
  // {
    //   sno:1,
    //   title:"Go to the market",
    //   desc:"You need to go to the market to get this job done "
    // },
    // {
    //   sno:2,
    //   title:"Go to the pool",
    //   desc:"You need to go to the market to get this job done1 "
    // },
    // {
    //   sno:3,
    //   title:"Go to the mall",
    //   desc:"You need to go to the market to get this job done2 "
    // }
// {
//   sno:4,
//   title:"Go to the college",
//   desc:"You need to go to the market to get this job done3 "
// },
// {
//   sno:5,
//   title:"Go to the home",
//   desc:"You need to go to the market to get this job done4 "
// }
// ]
// );


return (
  //  class -> class name
  // for-> htmlfor  
  // where is not closing tag then palce / this inside like input tag,hr tag
    // to return we should use <> content</> to wrap content and execute content 
    // <><h1>hi</h1></>
    // {true} is js variable
    // searchBar is attribute of header 
    // this is reusable compnent in any website <Header title="Mytodoslist" searchBar={false}/>
    
    // router in routing 

    // these will render when slash is endpoint 
    // <Addtodo addTodo={addTodo}/>
    // <Todos todos={todos} onDelete={onDelete}/>
    <>
    <Router>

    <Header title="Mytodoslist" searchBar={false}/>

    <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}
export default App;
