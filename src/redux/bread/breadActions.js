import { BUY_BREAD } from './breadTypes';

export const buyBread = (number) => ({
    type: BUY_BREAD,
    payload: number,
});

// export const buyBread = (number) => {
//     return {
//         type: BUY_BREAD,
//         payload: number,
//     };
// };
