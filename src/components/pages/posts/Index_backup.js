import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Index() {
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
            posts && posts.map((post) => {
                return (
                    
                    <div className='single-post border p-5 m-10 shadow-lg' key={post.id}>
                        <h3 className='text-4xl font-bold mb-5 mt-5'>{post.title.rendered}</h3>
                        <small>{post.date}</small>
                        <p dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                    </div>
                )
            })
        }
    </>
  )
}

export default Index