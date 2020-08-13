import { BUY_BREAD } from './breadTypes';

export const buyBread = (number) => {
    return {
        type: BUY_BREAD,
        payload: number,
    };
};
