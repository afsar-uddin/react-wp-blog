import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function AddPost() {
    const user = localStorage.getItem('user');
    // console.log('user token is ', user.token);
    const formik = useFormik({
        // init 
        initialValues: {
            title: '',
            content: ''
        },

         // validation schema
         validationSchema: Yup.object({
            title: Yup.string().required(),
            content: Yup.string().required()
        }),

        // submit
        onSubmit: (data) => {
            // console.log('data is ', data);
            const {token} = JSON.parse(user);

            // console.log('token is ', token);

            const headers = {
                Authorization : `Bearer ${token}`
            }

            const post = {
                ...data,
                status: 'publish'
            }

            axios.post(`${process.env.REACT_APP_API_ROOT}/posts`, post, {
                headers: headers
            })
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('error ', err.message);
            })
        }
    });

    console.log('values of formik ', formik.values);
    console.log('errors of formik ', formik.errors);

  return (
    <div className='container mx-auto py-10'>
        <h1 className='text-3x1 font-bold mb-5'>Create a new post to send wordpress posts</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='mb-5'>
                <label className='block text-gray-700 font-bold'>
                    Post Title
                </label>
                <input 
                    className='shadow border-2 w-full px-3'
                    type='text'
                    name='title'
                    placeholder='Enter post title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='mb-8'>
                <label className='block text-gray-700 font-bold'>
                    Post Content
                </label>
                <textarea 
                    className='shadow border-2 w-full px-3'
                    type='textarea'
                    name='content'
                    placeholder='Enter post content'
                    value={formik.values.content}
                    onChange={formik.handleChange}
                ></textarea>
                <button className='bg-blue-500 hove:bg- blue-700 text-white font-bold p-3'>Submit post</button>
                
            </div>
        </form>
    </div>
  )
}

export default AddPost