import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handleCalc = (op) => {
    const num1 = Number(a);
    const num2 = Number(b);
    if (op === '+') setResult(num1 + num2);
    else if (op === '-') setResult(num1 - num2);
    else if (op === '*') setResult(num1 * num2);
    else if (op === '/') setResult(num2 !== 0 ? num1 / num2 : 'Error');
  };

  return (
    <div>
      <h2>🧮 JavaScript Calculator</h2>
      <input onChange={(e) => setA(e.target.value)} />
      <input onChange={(e) => setB(e.target.value)} />
      <div>
        <button onClick={() => handleCalc('+')}>+</button>
        <button onClick={() => handleCalc('-')}>-</button>
        <button onClick={() => handleCalc('*')}>*</button>
        <button onClick={() => handleCalc('/')}>/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
