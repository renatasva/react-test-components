import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: #000000;
  border: none;
  text-decoration: none;
`;
const Button = ({ children, onClick }) => (
  <Btn onClick={onClick}>{children}</Btn>
);

export { Button };
