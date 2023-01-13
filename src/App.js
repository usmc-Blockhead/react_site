import React from 'react';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header/>
            <CampsitesList/>
            <Footer/>
        </div>
    );
}

export default App;
