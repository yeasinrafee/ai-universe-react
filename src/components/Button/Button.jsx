import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center">
      <button className="btn btn-info">{children}</button>
    </div>
  );
};

export default Button;
