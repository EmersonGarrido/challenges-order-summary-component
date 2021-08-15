import React from "react";

import * as S from "./styles";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <S.Container>{title}</S.Container>;
};

export default Button;
