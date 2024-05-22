import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Posts() {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            setPost(res.data)
        });

    }, [])
    
  return (
    <>
        {
            Object.keys(posts).length ? posts.map((post) => {
                return (
                    
                    <div className='single-post border p-5 m-10 shadow-lg' key={post.id}>
                        <Link to={`/posts/${post.id}`}><h3 className='text-4xl font-bold mb-5 mt-5'>{post.title.rendered}</h3></Link>
                        <Link to={`/posts/${post.id}`}>View more</Link>
                        <br />
                        <small>{post.date}</small>
                    </div>
                )
            }) : 'Loading'
        }
    </>
  )
}

export default Posts