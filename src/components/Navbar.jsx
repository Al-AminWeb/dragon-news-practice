import React from 'react';
import {NavLink} from "react-router";
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className="flex gap-3 text-accent">
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={user} alt=""/>
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
