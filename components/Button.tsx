import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
