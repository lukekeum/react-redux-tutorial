import * as React from 'react';

interface ICounterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: React.FC<ICounterProps> = ({
  number,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
