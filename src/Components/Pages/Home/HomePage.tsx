import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../../Shared/Navbar';

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
});

function HomePage() {
    return (
        <div className='w-screen h-screen bg-slate-200'>
            <Navbar />
        </div>
    );
}

export default HomePage;
