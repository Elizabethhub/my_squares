import React from "react";
import Square from "./Square";
import { GridContainer, MainSquare, InnerGrid } from "./styles";

function SquareGrid({ size, hoveredSquares, setHovered }) {
  const totalSquares = size * size;
  const squareSize = Math.floor(500 / size); // Adjust 500 as needed for maximum container size

  const squares = Array.from({ length: totalSquares }, (_, index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const position = `row ${row + 1} col ${col + 1}`;
    const isHighlighted = hoveredSquares.includes(position);

    return (
      <Square
        key={index}
        row={row}
        col={col}
        size={squareSize}
        isHighlighted={isHighlighted}
        position={position}
        setHovered={setHovered}
      />
    );
  });

  return (
    <GridContainer>
      <MainSquare size={500}>
        <InnerGrid size={size}>{squares}</InnerGrid>
      </MainSquare>
    </GridContainer>
  );
}

export default SquareGrid;
