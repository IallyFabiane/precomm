import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Ecommerce from 'pages/Ecommerce';
import Carrinho from 'pages/Carrinho';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="ecommerce" element={<Ecommerce />} />
                <Route path="carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;