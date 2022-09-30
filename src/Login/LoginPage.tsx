import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='w-screen h-screen bg-slate-900 flex flex-col justify-center items-center text-white font-medium'>
            <h1 className='text-2xl mb-6'>
                Welcome on our platform, <br></br> Sign In to your account
            </h1>
            <div className='flex flex-col mb-3'>
                <label htmlFor='login' className='text-lg mb-3 text-left'>
                    Login
                </label>
                <input type='text' id='login' className='rounded w-[250px] h-8 bg-slate-700 px-2' placeholder='example@example.com' />
            </div>
            <div className='flex flex-col mb-3'>
                <label htmlFor='login' className='text-lg mb-3 text-left'>
                    Password
                </label>
                <input type='password' id='login' className='rounded w-[250px] h-8 bg-slate-700 px-2' placeholder='password' />
            </div>
            <Router>
                <Link to='/dashboard'>
                    <button type='submit' className='bg-slate-500 rounded px-5 py-1.5 mt-3 hover:bg-slate-700'>
                        Sign In
                    </button>
                </Link>
            </Router>
        </div>
    );
};

export default LoginPage;
