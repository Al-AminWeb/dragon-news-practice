import React, {use} from 'react';
import { Link} from "react-router";
import {AuthContext} from "../provider/AuthProvider.jsx";

const Login = () => {
    const {signIn} = use(AuthContext);
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })

    }


    return (


        <div className="flex justify-center items-center py-4">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Log In your Account</h2>
                    <form onSubmit={handleLogIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />


                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />


                        <div><a className="link link-hover">Forgot password?</a></div>


                        <button type="submit" className="btn btn-neutral mt-4">Login</button>


                        <p className="font-semibold text-center">Dont have a Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
