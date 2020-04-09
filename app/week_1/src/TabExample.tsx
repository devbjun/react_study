import React from 'react';

const content: Array<any> = [
  {
    tab: '요리',
    content: '저녁먹자!!'
  },
  {
    tab: '축구',
    content: '공차러가자!!'
  }
];

function useTabs(initTab = 0, allTabs: Array<any>) {
  const [curIndex, setCurIndex] = React.useState(initTab);
  return { 
    curItem: allTabs[curIndex],
    changeItem: setCurIndex 
  };
}

function TabExample() {

  const { curItem, changeItem } = useTabs(0, content);
  return (
    <div>
      { 
        content.map((section, index) => (
          <button onClick={() => changeItem(index)} key={index} >{section.tab}</button>
        ))
      }
      <div>
        { curItem.content }
      </div>
    </div>
  )
}

export default TabExample;