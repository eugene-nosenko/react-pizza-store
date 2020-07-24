import React from 'react';

const Button = (props) => {
  console.log(props);
  return (
    <button className={`button ${props.outline ? 'button--outline' : ''}`}>{props.children}</button>
  );
};

export default Button;
