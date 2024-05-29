import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../redux/slice/authSlice';

function Navbar({authUser}) {
  // const auth = localStorage.getItem('user');
  
  console.log('auth is ', authUser);

  const dispatch = useDispatch();

  return (
    <div>
        <ul className='flex gap-5 p-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            {!authUser?.token ? (
              <>
                <li><Link to="/register">Register</Link></li>  
                <li><Link to="/login">Login</Link></li>  
              </>
            ) : (
              <>
                <li><Link to="/addpost">Add Post</Link></li>
                <li><button onClick={() => dispatch(logout())}>Logout</button></li>
                <li><Link to="/profile">Hi {authUser.user_display_name}</Link></li>
              </>
            )}
        </ul>
    </div>
  )
}

export default Navbar