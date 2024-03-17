import React, { useState } from 'react'
import './Navbar.css'
import logo1 from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {



    const [menu, setMenu] = useState("shop");
    return (
        
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo1} alt="" />
                <p>SARATHI</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration:'none',color: '#617978'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Arts") }}><Link style={{textDecoration:'none',color: '#617978'}}to='./HandiCrafts'>Arts</Link>{menu === "Arts" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("HandiCrafts") }}><Link style={{textDecoration:'none',color: '#617978'}}to ='./Arts'>HandiCrafts</Link>{menu === "HandiCrafts" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Plants") }}><Link style={{textDecoration:'none',color: '#617978'}}to='./Plants'>Plants</Link>{menu === "Plants" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link style={{textDecoration:'none',color: '#617978'}}to='./login'><button>Login</button></Link> 
                <Link style={{textDecoration:'none',color: '#617978'}}to={'./cart'}><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
