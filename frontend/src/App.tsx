import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/auth/login";
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
