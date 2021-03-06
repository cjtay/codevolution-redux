import { BUY_BREAD } from './breadTypes';

const initialState = {
    numOfBread: 30,
};

const breadReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BREAD:
            return {
                ...state,
                numOfBread: state.numOfBread - action.payload,
            };
        default:
            return state;
    }
};

export default breadReducer;
