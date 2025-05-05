import React, {use} from 'react';
import {Link} from "react-router";
import {AuthContext} from "../provider/AuthProvider.jsx";



const Register = () => {
    const {createUser,setUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log({ name, email, password , photo });

        createUser(email,password)
            .then(result => {
                const  user = result.user;
                // console.log(user);
                setUser(user);
            })
        .catch(err => {
            console.log(err);
        })


    }

    return (
        <div className="flex justify-center items-center py-4">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center">Register your Account</h2>
                    <form onSubmit={handleRegister} className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" className="input" name='name'
                                placeholder="Name" required />

                        <label className="label">Photo URL</label>
                        <input type="link" className="input" name="photo" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input type="email" className="input" name="email" placeholder="Email" required />



                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" required />


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className="font-semibold text-center">Already Have a Account ? <Link className="text-secondary" to='/auth/login'>login</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
