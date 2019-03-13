import React from 'react';

const Scroll = (props) => {
  console.log('Scroll');
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Scroll;