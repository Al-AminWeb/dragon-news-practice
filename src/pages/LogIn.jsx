import React from 'react';
import {Form, Link} from "react-router";

const Login = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Log In your Account</h2>
                    <Form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="font-semibold text-center">Dont have a Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>

                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Login;
