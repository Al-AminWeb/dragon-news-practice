import React, {use} from 'react';
import {AuthContext} from "./AuthProvider.jsx";
import {Navigate} from "react-router";

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    console.log(user);

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user && user?.email){
        return children;
    }
    else return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;
