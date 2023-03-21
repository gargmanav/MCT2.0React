import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
 
  return (
    <div>
        <div className='navbarlist'>
          <div className='walaleftpart'></div>
          <div className='walarightpart'>
            <ul>
            <Link to='/Home' style={{textDecoration: 'none'}}><li>Home</li></Link>
            <Link to='/products' style={{textDecoration: 'none'}}><li>Products</li></Link>
            <Link to='/users' style={{textDecoration: 'none'}}><li>Users</li></Link>
            <Link to='/contacts' style={{textDecoration: 'none'}}><li>Contact</li></Link>
            <Link to='/' style={{textDecoration: 'none'}}><li>Logout</li></Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar