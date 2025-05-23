import React, {use} from 'react';
import {NavLink} from "react-router";

const categoryPromise = fetch('/categories.json')
.then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <h2 className='font-bold'>All Category</h2>
        <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                categories.map((category) => (
                    <NavLink className='btn bg-base-100 border-0 hover: font-semibold text-accent' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
                ))
            }
        </div>
        </div>
    );
};

export default Categories;
