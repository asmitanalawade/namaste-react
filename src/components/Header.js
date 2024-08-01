import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    return(
        <div className='flex justify-between shadow-lg bg-pink-200 mb-5'>
            <div className='logo-container'>
                <img className='w-[101px] rounded-3xl p-2.5' src={LOGO_URL}/>
            </div>
            <div className='content-center'>
                <ul className="flex list-none text-xl">
                    <li className="px-2.5">
                        Online Status: {onlineStatus ? '✅' : '🔴'} 
                    </li>
                    <li className="px-2.5">
                        <Link className="link-ele" to="/">Home</Link>
                    </li>
                    <li className="px-2.5">
                        <Link className="link-ele" to="/about">About Us</Link>
                    </li>
                    <li className="px-2.5">
                        <Link className="link-ele" to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="px-2.5">
                        <Link className="link-ele" to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2.5">cart</li>
                    <button className="login-btn px-2.5" onClick={()=>{btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;