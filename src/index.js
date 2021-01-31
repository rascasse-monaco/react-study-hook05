import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const effect = document.getElementById('effect');
    effect.innerHTML = `useEffectが描画:You Clicked ${count} times.`;
    document.title = `You clicked ${count + 100} times`;
  });

  return (
    <div>
      <p>関数のreturnのJSXに記述して描画:You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>通常描画:You Clicked {count} times.</p>
    </div>
  );
}

ReactDOM.render (
  <Example />,
  document.getElementById('root')
);