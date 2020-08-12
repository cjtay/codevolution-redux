import React from 'react';
import { connect } from 'react-redux';
import { buyBread } from '../redux/';

const BreadContainer = (props) => {
    return (
        <div>
            <h2>Number of Bread {props.bread}</h2>
            <button onClick={props.buyBread}>Buy Bread</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        bread: state.bread.numOfBread,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyBread: () => dispatch(buyBread()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadContainer);
