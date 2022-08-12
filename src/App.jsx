import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Ecommerce from './pages/Ecommerce';
import Carrinho from 'pages/Carrinho';

function App() {
    return ( 
        <BrowserRouter>
            <Login path="/login" />
            <Ecommerce exact path="/" />
            <Carrinho path="/carrinho" />
        </BrowserRouter>
    );
}

export default App;