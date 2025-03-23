import React from 'react';
import Header from '../components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './styles/global.css';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default App;