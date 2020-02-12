import React, { PropTypes } from 'react';

function Counter({ increment, incrementIfOdd, incrementAsync, decrement, counter }) {
  return (
    <p>
      <img
        alt="Counter"
        src={require('./Counter.png')}
        className={require('./Counter.css').counter}
      />
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={() => incrementAsync()}>Increment async</button>
    </p>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
