import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header
    style={{ padding: "20px", backgroundColor: "#0070f3", color: "#fff" }}
  >
    <h1>{title}</h1>
  </header>
);

export default Header;
