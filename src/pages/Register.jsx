import React from 'react';
import {Form, Link} from "react-router";

const Register = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Register your Account</h2>
                    <Form className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input type="link" className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />



                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className="font-semibold text-center">Already Have a Account ? <Link className="text-secondary" to='/auth/login'>login</Link></p>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;
