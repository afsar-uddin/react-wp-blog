import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../../redux/slice/authSlice';

const Register = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const formik = useFormik({
        // init values
        initialValues: {
            username: 'admin4',
            email: 'afsarwebdev4@gmail.com',
            password: 'afsarme'
        },

        // validation schema
        validationSchema: Yup.object({
            username: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required().min(5)
        }),

        // on submit
        onSubmit: (data) => {
            dispatch(register(data));
            console.log('register data is ', data);
        }

        
    });
    console.log('auth is ', auth);

  return (
    <section className='h-screen'>
    <div className='container px-6 py-12 h-full'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 '>
            <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
               {/* img */}

            </div>
            <div className='md:8/12 lg:w-5/12 lg:ml-20'>
                <h1 className='font-bold text-6x1 text-center mb-5'>
                    Register
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-6'>
                        <input  
                            type="text"
                            className='form-control block w-full px-4 py-2 text-x1 border-2'
                            placeholder='Username'
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-6'>
                        <input  
                            type="email"
                            className='form-control block w-full px-4 py-2 text-x1 border-2'
                            placeholder='Email address'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='mb-6'>
                        <input 
                            type="password"
                            className='form-control block w-full px-4 py-2 text-x1 border-2'
                            placeholder='Password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className='inline-block px-7 py-3 bg-blue-600 text-white disabled:cursor-wait disabled:bg-blue-500 disabled:text-slate-100'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                        // disabled={auth.isLoading}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Register