import React from "react";
import { HoveredListWrapper, ListContainer, HoveredSquare } from "./styles";

const HoveredList = React.memo(({ hoveredSquares }) => {
  return (
    <HoveredListWrapper>
      <h2>Hover squares</h2>
      <ListContainer>
        {hoveredSquares.map((square) => (
          <HoveredSquare key={square}>{square}</HoveredSquare>
        ))}
      </ListContainer>
    </HoveredListWrapper>
  );
});

export default HoveredList;
