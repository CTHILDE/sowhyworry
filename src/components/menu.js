import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
<div style={{
  background:'#f4f4f4',
  paddingTop:'10px'
}}>
 <ul style={{
   listStyle:'none',
   display:'flex',
   justifyContent: 'space-evenly'
 }}>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/page-2'>About</Link>
    </li>
    <li>
      <Link to='/page-3'>Grid-Test</Link>
    </li>
    <li>
      <Link to='/page-4'>page-4</Link>
    </li>
    <li>
      <Link to='/page-5'>page-5</Link>
    </li>
  </ul>
</div>


  )

export default Menu;
