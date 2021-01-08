import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../modules';
import { decrease, increase } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
  const count = useSelector((state: TRootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter number={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
