import React from 'react';
import './styles.css';

const Textcomp = (props) => {
  let under = '';
  if(props.underline) {
    under = 'underline'
  } else {
    under = 'none'
  }

  const styles = {
    fontSize: props.size,
    textDecoration: under,
    margin: props.space,
    color: props.color
  };

  return (
    <span
      className="colored-text"
      style = {styles}
    >
      111
      {props.text}
    </span>
  );
}

export default Textcomp;