import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className='w-screen h-screen bg-slate-900 flex flex-col justify-center items-center text-white font-medium'>
            <h1 className='text-2xl mb-6 text-center'>
                Join to Photogram, <br></br> Sign Up an account
            </h1>
            <div className='flex flex-col mb-3'>
                <label htmlFor='login' className='text-lg mb-3 text-left'>
                    Login/e-mail*
                </label>
                <input type='text' id='login' className='rounded w-[250px] h-8 bg-slate-700 px-3' />
            </div>
            <div className='flex flex-col mb-3'>
                <label htmlFor='login' className='text-lg mb-3 text-left'>
                    Password*
                </label>
                <input type='password' id='login' className='rounded w-[250px] h-8 bg-slate-700 px-3' />
            </div>
            <div className='flex flex-col mb-3'>
                <label htmlFor='login' className='text-lg mb-3 text-left'>
                    Repeat password*
                </label>
                <input type='password' id='login' className='rounded w-[250px] h-8 bg-slate-700 px-3' />
            </div>
            <Link to='/home'>
                <button type='submit' className='bg-slate-500 rounded px-5 py-1.5 mt-3 hover:bg-slate-700'>
                    Sign Up
                </button>
            </Link>
            <div className='mt-5 opacity-60'>
                You on Photogram already?&nbsp;
                <Link to='/login' className='underline'>
                    Sign In.
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
