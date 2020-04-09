import React from 'react';

function StateExample() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default StateExample;