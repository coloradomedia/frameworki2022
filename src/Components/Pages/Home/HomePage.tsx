import axios from '../../../axios';
import React, { Component, FC } from 'react';
import Navbar from '../../Shared/Navbar';

// interface IProps {
//     title: string
// }



// constructor(props) {
//     super(props);
//     ///
//     this.state = {
//       photos: [],
//     };
//   }

// export const HomePage: FC<IProps> = (props) => {
export const HomePage: FC = (props) => {

//     componentDidMount() {
//         this.fetchNotes();
//       }

      
// async fetchNotes() {
//     const res = await axios.get('/photos');
//     const notes = res.data;

//     this.setState({ notes });
//   }
    return (
        <div className='w-screen h-screen bg-slate-200'>
            <Navbar />
        </div>
    )
}

// function HomePage() {
//     return (
//         <div className='w-screen h-screen bg-slate-200'>
//             <Navbar />
//         </div>
//     );
// }

// export default HomePage;
