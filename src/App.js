import logo from './logo.svg';
import './App.css';
// dont make header file 
// header and Header  is diff due to H in react where header is tag
// import header from "./mycomponents/header";
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
import Todoitem from "./mycomponents/Todoitem";
import Todos from "./mycomponents/Todos";
// import {Todos} from "./mycomponents/Todos"; for name export 

// react bootstrap also can be used 
// convert into react js for emit 
// main file to build app 
//main component
// component are of two types function based and className based 
// jsx js syntax extention to combine dynamic js with html 
// we will do function based component 

// it is parent component 
function App(){
  return (
  //  class -> class name
  // for-> htmlfor  
  // where is not closing tag then palce / this inside like input tag,hr tag
    // to return we should use <> content</> to wrap content and execute content 
    // <><h1>hi</h1></>
    <>
    <Header title="Mytodoslist"/>
    <Todos/>
    <Footer/>

    </>
  );
}

export default App;
