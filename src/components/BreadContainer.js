import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyBread } from '../redux/';

const BreadContainer = (props) => {
    const [number, setNumber] = useState(1);

    const changeHandler = (e) => {
        setNumber(e.target.value);
    };

    return (
        <div>
            <h2>Number of Bread {props.bread}</h2>
            <input type="text" value={number} onChange={changeHandler} />
            <button onClick={() => props.buyBread(number)}>
                Buy {number} Bread
            </button>
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
        buyBread: (number) => dispatch(buyBread(number)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreadContainer);
