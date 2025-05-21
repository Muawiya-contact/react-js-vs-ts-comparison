# ⚔️ React: JavaScript vs TypeScript Comparison

This repository compares how React projects differ when written using **JavaScript (JS)** and **TypeScript (TS)**.

---

## 🧠 Key Concepts

| Concept          | JavaScript (JS)                            | TypeScript (TS)                                 |
|------------------|--------------------------------------------|--------------------------------------------------|
| Typing           | Dynamic (no enforced types)                | Static (enforced types)                         |
| Error Detection  | Runtime errors                             | Compile-time + runtime errors                   |
| Safety           | Risk of bugs due to flexible typing        | Prevents many bugs before running               |
| Developer Tools  | Basic autocomplete                         | Advanced autocomplete & IntelliSense            |
| Learning Curve   | Easier to start                            | Steeper, but worth it in large codebases        |

---

## 🔍 Visual Difference Example

### ✅ JavaScript (React)

```jsx
// App.js
import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [sum, setSum] = useState(null);

  const handleCalculate = () => {
    setSum(Number(a) + Number(b));
  };

  return (
    <div>
      <h1>🚀 JavaScript Calculator</h1>
      <input onChange={(e) => setA(e.target.value)} />
      <input onChange={(e) => setB(e.target.value)} />
      <button onClick={handleCalculate}>Add</button>
      <p>Result: {sum}</p>
    </div>
  );
}

export default App;
```
## ✅ TypeScript (React)
```
// App.tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [sum, setSum] = useState<number | null>(null);

  const handleCalculate = () => {
    setSum(Number(a) + Number(b));
  };

  return (
    <div>
      <h1>🛡️ TypeScript Calculator</h1>
      <input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />
      <button onClick={handleCalculate}>Add</button>
      <p>Result: {sum}</p>
    </div>
  );
};

export default App;
```
## 📌 Summary

Both **JS** and **TS** can build React apps.

- **TypeScript** adds **type safety**, helps catch bugs **before running**, and makes code more **reliable and maintainable**.
- **JavaScript** is more **beginner-friendly** and flexible, but may allow bugs silently.

---

## ✨ Ideal Usage

- Use **JS** for small, fast projects or learning.
- Use **TS** for long-term, team-based, or production apps.

---

## 👨‍💻 Author

Created by **Muawiya Amir**  
GitHub: [@Coding-Moves](https://github.com/Coding-Moves)
---
