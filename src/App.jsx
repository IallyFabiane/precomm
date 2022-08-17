import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login';
import Ecommerce from 'pages/Ecommerce';
import Carrinho from 'pages/Carrinho';
import Cadastro from 'pages/Cadastro';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="ecommerce" element={<Ecommerce />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;