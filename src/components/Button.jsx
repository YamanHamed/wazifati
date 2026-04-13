import React from "react";

const Button = ({ style, text, className, onClick }) => {
  return (
    <button style={style} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
