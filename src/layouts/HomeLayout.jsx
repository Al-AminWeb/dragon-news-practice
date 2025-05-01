import React from 'react';
import {Outlet} from "react-router";
import Header from "../components/Header.jsx";
import LatestNews from "../components/LatestNews.jsx";
import Navbar from "../components/Navbar.jsx";
import LeftAside from "../components/homelayout/LeftAside.jsx";
import RightAside from "../components/homelayout/RightAside.jsx";

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
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3'> <LeftAside/></aside>
                <section className="col-span-6 ">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightAside/></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
