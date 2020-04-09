import React from 'react';

function useInput(initValue = '', validator?: Function) {
  const [value, setValue] = React.useState(initValue);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    
    if ((validator === undefined) || ((typeof validator === 'function') && (validator(value))))
      setValue(value);
  }

  return { value, onChange };
}

function InputExample() {

  const name = useInput(undefined, (value: string) => {
    return value.length <= 10;
  });

  return (
    <div>
      <input placeholder="Mr." type="test" {...name} />
    </div>
  )
}

export default InputExample;