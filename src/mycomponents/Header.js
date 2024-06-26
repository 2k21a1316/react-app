// react functional based component 
import React from 'react'
//it is child component
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
// props.title or only title can be used 
export default function Header(props) {//props is js object , and we are passing from parent component to child component
  // named export and default export 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" to="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="#">About</a>
          </li>
          
        </ul>
        {props.searchBar?< form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>:""}
      </div>
    </div>
  </nav>
  )
}
// default props and proptypes 
// Header.defaultProps={
//   title:"Your default title when parent not give title to child",
//   // searchBar:true//by default true if parent not specified it
// }
Header.propTypes ={//type checking
  title : PropTypes.string ,//gives error in console you cant give number into string
searchBar:PropTypes.bool.isRequired//mandatory property
} 
// write this above code to handle error 