import React, { useState } from 'react';

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const doMath = (value) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input type="text" id="display" readOnly value={displayValue} />

      <br /><br />
      <button onClick={() => doMath('0')}>0</button>
      <button onClick={() => doMath('1')}>1</button>
      <button onClick={() => doMath('2')}>2</button>
      <button onClick={() => doMath('3')}>3</button>
      <br />
      <button onClick={() => doMath('4')}>4</button>
      <button onClick={() => doMath('5')}>5</button>
      <button onClick={() => doMath('6')}>6</button>
      <br />
      <button onClick={() => doMath('7')}>7</button>
      <button onClick={() => doMath('8')}>8</button>
      <button onClick={() => doMath('9')}>9</button>
      <br />
      <button onClick={() => doMath('-')}>-</button>
      <button onClick={() => doMath('*')}>*</button>
      <button onClick={() => doMath('+')}>+</button>
      <button onClick={() => doMath('/')}>/</button>
      <br /><br />
      <button onClick={clearDisplay}>Clear</button>
      <button onClick={calculate}>=</button>
    </div>
  );
};
