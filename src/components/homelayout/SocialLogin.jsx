import React from 'react';
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div >
           <h2 className='font-bold mb-5'>Login with</h2>
            <div className='space-y-5 gap-3'>
                <button className='btn btn-outline w-full'> <FcGoogle size={24}/>
                    Login With Google</button>
                <button className='btn btn-outline w-full'> <FaGithub size={24}/>
                    Log in with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
