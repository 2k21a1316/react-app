// react arrow function component 
import React from 'react'
// import './footer.css'


const Footer = () => {
  //how to add style in react
//   let footerstyle={
// position:'relative',
// top:'50vh' ,
// width:'100%',
//   }
let footerstyle={
  minHeight:"20vh"
}
  return (
    <footer style={footerstyle} className='bg-dark text-light text-center mt-3'>
<p className="text-center py-5">
Copyright &copy; MyTodosList.com
</p>
    </footer>
  )
}
export default Footer

// named export 
//  export const Footer = () => {
//   return (
//     <div>
//       footer Works!!
//     </div>
//   )
// }
