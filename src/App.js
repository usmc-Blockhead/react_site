import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList.js';

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
