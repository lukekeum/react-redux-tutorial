const INCREASE = 'increase';
const DECREASE = 'decrease';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = 0;

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
