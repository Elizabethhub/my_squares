import styled from "styled-components";

export const ModeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModeSelect = styled.select`
  height: 24px;
  font-size: 16px;
`;

export const StartButton = styled.button`
  margin-left: 35px;
  background-color: #3090b0;
  color: white;
  border-radius: 5px;
  padding: 3px 8px;
  cursor: pointer;
  font-size: 14px;
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
`;

export const MainSquare = styled.div`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.size}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size}, 1fr)`};
  width: 100%;
  height: 100%;
`;

export const HoveredListWrapper = styled.div`
  margin-left: 50px;

  @media screen and (max-width: 678px) {
    max-width: 50%;
    margin-right: auto;
    margin-left: auto;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const ListContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

export const HoveredSquare = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px 5px;
  background-color: #fffbbdde;
  border: 1px solid #6f263a7d;
  font-weight: 500;
  color: brown;
`;

export const SquareWrapper = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border: 1px solid black;
  background-color: ${(props) => (props.$hovered ? "blue" : "white")};
`;
