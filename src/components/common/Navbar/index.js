import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className='flex gap-5 p-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
        </ul>
    </div>
  )
}

export default Navbar