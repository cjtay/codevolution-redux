import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux';

const AuthContainer = (props) => {
    return (
        <div>
            <h2>Login Status:</h2>
            {props.authState ? (
                <>
                    <p>Logged In</p>
                    <button onClick={props.logoutOfSite}>Logout</button>
                </>
            ) : (
                <>
                    <p>Logged Out</p>
                    <button onClick={props.loginToSite}>Login</button>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authState: state.auth.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginToSite: () => dispatch(login()),
        logoutOfSite: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
