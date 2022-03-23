import React from "react";
import Logo from '../assets/pizzalogo.jpg';
import './Header.css';

export default function Header(){
    return (
    <div className="header-container">
        <div className="header-container-content">
            <img className="logo" src={Logo} alt="" height="52px" width="52px" />
            <div className="header-title">Make Your Pizza</div>
        </div>
    </div>
    );
}