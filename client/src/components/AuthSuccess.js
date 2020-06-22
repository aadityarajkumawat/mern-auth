import React from 'react';
import './authsuccess.css';

const AuthSuccess = () => {
    return (
        <div className='container center-heading-below'>
            <h1 className='user-authenticated' style={{ fontSize: '50px' }}>
                Conragulations you are Authenticated!!
            </h1>
        </div>
    );
};

export default AuthSuccess;
