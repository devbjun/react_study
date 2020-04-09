import React from 'react';

interface Props {
  name: string;
  img: string;
}

const PropsExample: React.SFC<Props> & { defaultProps: Partial<Props> } = function({name, img}) {
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  )
}

PropsExample.defaultProps = {
  name: '밥',
  img: undefined
};

export default PropsExample;