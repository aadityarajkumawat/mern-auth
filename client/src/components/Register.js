import React, { useState, useEffect } from 'react';
import './register.css';
import { connect } from 'react-redux';
import { register } from '../actions/authAction';

const Register = ({ auth: { isAuthenticated }, register, history }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const { name, email, password } = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        register(user);
    };

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/auth-success');
        }
        setLoading(false);
    }, [isAuthenticated, history]);

    return (
        <div className='box-for-form'>
            <h1 className='heading'>Authentication</h1>
            <p className='below-heading'>Sign Up</p>
            <form className='container-form-custom' onSubmit={onSubmit}>
                <div className='field'>
                    <p className='control has-icons-left'>
                        <input
                            type='text'
                            className='input is-primary'
                            name='name'
                            placeholder='name'
                            value={name}
                            onChange={onChange}
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-user'></i>
                        </span>
                    </p>
                </div>
                <div className='field'>
                    <p className='control has-icons-left'>
                        <input
                            type='email'
                            className='input is-primary'
                            name='email'
                            placeholder='email'
                            value={email}
                            onChange={onChange}
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-envelope'></i>
                        </span>
                    </p>
                </div>
                <div className='field'>
                    <p className='control has-icons-left'>
                        <input
                            type='password'
                            className='input is-primary'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={onChange}
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-lock'></i>
                        </span>
                    </p>
                </div>

                <div className='control btn-cus'>
                    <button
                        className={
                            loading
                                ? 'button is-primary is-loading'
                                : 'button is-primary'
                        }
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            <p>
                Already a user? <a href='/login'>Login</a>{' '}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { register })(Register);
