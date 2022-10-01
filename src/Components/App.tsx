import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
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
