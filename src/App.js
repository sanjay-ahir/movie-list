import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cart from "./Cart";
import Details from "./Details"
import Search from "./Search";
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/Watchlater' element={<Cart/>}></Route>
                    <Route path='/details/:id' element={<Details/>}></Route>
                    <Route exact path='/search/:id' element={<Search/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

