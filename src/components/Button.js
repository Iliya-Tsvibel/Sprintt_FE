import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = ({ title, Icon }) => {
  return (
    <nav className="button">
      <div className="button_title">{title}</div>
      <div className="button_icon">{Icon}</div>
    </nav>
  );
};

export default Button;
