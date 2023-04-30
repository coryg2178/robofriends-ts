import React, { PropsWithChildren } from 'react';

const Scroll = (props: PropsWithChildren) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
