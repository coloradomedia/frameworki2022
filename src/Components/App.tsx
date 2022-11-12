import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {HomePage} from './Pages/Home/HomePage';
import RegisterPage from './Pages/Register/RegisterPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/home',
        element: <HomePage />,
    },
]);

function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
