import React from 'react';

import PropsExample from './PropsExample';
import StateExample from './StateExample';
import InputExample from './InputExample';
import TabExample from './TabExample';

function App() {
  let likes = ['치느님', '햄버거', '피자', '피자', '김밥', '초콜릿'];

  return (
    <div>
      <h1>Hello React TSX!</h1>
      { likes.map((item, index) => (<PropsExample name={item} key={index} />)) }
      <StateExample />
      <InputExample />
      <TabExample />
    </div>
  );
}

export default App;
