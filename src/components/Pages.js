import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Posts from './pages/posts/Posts'
import Navbar from './common/Navbar'
import PostSingle from './pages/posts/PostSingle'
import Login from './pages/login'
import AddPost from './pages/AddPost'
import { useSelector } from 'react-redux'
import ProtectedRoute from './pages/protectedRoutes'
import Profile from './pages/profile'

function Pages() {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <>
      <Navbar authUser={authUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostSingle />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute authUser={authUser} />}>
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default Pages