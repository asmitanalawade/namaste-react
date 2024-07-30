import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status: {onlineStatus ? '✅' : '🔴'} 
                    </li>
                    <li>
                        <Link className="link-ele" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link-ele" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="link-ele" to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="link-ele" to="/grocery">Grocery</Link>
                    </li>
                    <li>cart</li>
                    <button className="login-btn" onClick={()=>{btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;