import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-screen h-16 shadow-xl flex cursor-pointer items-center justify-between'>
            <Link to='/home'>
                <div className='text-2xl ml-5 font-medium'>Photogram</div>
            </Link>
            <div className='text-white mr-5'>
                <Link to='/login'>
                    <button
                        type='submit'
                        className='bg-slate-500 border-2 border-slate-500 rounded px-3 py-1 mr-3 hover:bg-slate-700 hover:border-slate-700'>
                        Sign In
                    </button>
                </Link>
                <Link to='/register'>
                    <button
                        type='submit'
                        className='bg-transparent text-black border-2 border-slate-500 rounded px-3 py-1 hover:bg-slate-700 hover:border-slate-700 hover:text-white'>
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
