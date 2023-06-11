import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(UserContext);

    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoutes;