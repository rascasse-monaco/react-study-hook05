import React, {　useState, useEffect　} from "react";
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(10);

  const dec = () => {
    setCount(count - 1);
  };

  const inc = () => {
    setCount(count + 1);
  };

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


