import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const auth = localStorage.getItem('user');

  return (
    <div>
        <ul className='flex gap-5 p-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            {!auth ? (
              <li><Link to="/login">Login</Link></li>  
            ) : (
              <>
                <li><Link to="/addpost">Add Post</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </>
            )}
        </ul>
    </div>
  )
}

export default Navbar