import React, { useState } from "react";
const Button = ({ handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      Click me!
    </button>
  );
};
export default Button;