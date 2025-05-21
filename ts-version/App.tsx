import React, { useState } from 'react';

const App: React.FC = () => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [result, setResult] = useState<number | string | null>(null);

  const handleCalc = (op: string): void => {
    const num1 = Number(a);
    const num2 = Number(b);
    if (op === '+') setResult(num1 + num2);
    else if (op === '-') setResult(num1 - num2);
    else if (op === '*') setResult(num1 * num2);
    else if (op === '/') setResult(num2 !== 0 ? num1 / num2 : 'Error');
  };

  return (
    <div>
      <h2>🛡️ TypeScript Calculator</h2>
      <input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />
      <div>
        <button onClick={() => handleCalc('+')}>+</button>
        <button onClick={() => handleCalc('-')}>-</button>
        <button onClick={() => handleCalc('*')}>*</button>
        <button onClick={() => handleCalc('/')}>/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
