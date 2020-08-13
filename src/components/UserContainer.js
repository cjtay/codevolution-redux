import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (userData.users) {
        console.log('users at container: ', userData.users);
    }
    return (
        <div>
            <h1>List of Users</h1>
            {userData.loading && <p>Loading...</p>}
            {userData.error && <h2>{userData.error}</h2>}
            {userData.users &&
                userData.users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
