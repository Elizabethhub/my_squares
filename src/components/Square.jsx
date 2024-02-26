import React from "react";
import { SquareWrapper } from "./styles";

const Square = ({ size, isHighlighted, position, setHovered }) => {
  const handleMouseOver = () => {
    if (isHighlighted) {
      setHovered((prev) => prev.filter((el) => el !== position));
    } else {
      setHovered((prevState) => [...prevState, position]);
    }
  };

  return (
    <SquareWrapper
      size={size}
      onMouseOver={handleMouseOver}
      $hovered={isHighlighted}
    ></SquareWrapper>
  );
};

export default React.memo(Square);
