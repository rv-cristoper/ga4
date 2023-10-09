import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from '../page/Landing';
import Deposit from '../page/Deposit';
import Withdraw from '../page/Withdraw';
import MainLayout from '../layouts/MainLayout';

const PublicRoute = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default PublicRoute