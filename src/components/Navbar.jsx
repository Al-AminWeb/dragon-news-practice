import React, {use} from 'react';
import {Link, NavLink} from "react-router";
import userPic from '../assets/user.png'
import {AuthContext} from "../provider/AuthProvider.jsx";

const Navbar = () => {
    const {user,logOut} = use(AuthContext);
    const handleLogOut = () =>{
        console.log("logout is clicked");
        logOut()
        .then (()=>{
            alert("logged out");
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className="flex gap-3 text-accent">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={userPic} alt=""/>

                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>Logout</button> : <Link to="/auth/login">
                        <button className='btn btn-primary px-10'>Login</button>
                    </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;
