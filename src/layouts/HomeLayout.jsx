import React from 'react';
import {Outlet} from "react-router";
import Header from "../components/Header.jsx";
import LatestNews from "../components/LatestNews.jsx";
import Navbar from "../components/Navbar.jsx";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3 '>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-3 '>
                    <Navbar/>
                </nav>
            </header>
            <main>

                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;
