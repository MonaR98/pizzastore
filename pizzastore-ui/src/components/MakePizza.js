import React from "react";
import Pizza from '../assets/pizza.jpg';
import './MakePizza.css';
import { useNavigate } from 'react-router-dom';
export default function MakePizza(){

    const navigate=useNavigate();
    return (
    <div className="container">
        <div className="img-container">
            <img className="pizza-img"src={Pizza} alt="" />
        </div>
        <div className="ingredients-container">
            Choose Your Favourite Ingredients
            <br />
            <table>
                <tr>
                    <th>Ingredient</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Cheese</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Onion</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Tomato</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Capsicum</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Corn</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Mushrooms</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
                <tr>
                    <td>Olives</td>
                    <td>₹50</td>
                    <td> <input type="checkbox" /></td>
                </tr>
            
            </table>
            <br />
            <button id="bake-btn"
          onClick={() => navigate("/cart")}
          className="proceed"
        >
          Ready to Bake?
        </button>
        </div>
        
    </div>
    )
}