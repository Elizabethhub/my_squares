import React, { useState, useEffect } from "react";
import SelectMode from "./components/SelectMode";
import SquareGrid from "./components/SquareGrid";
import HoveredList from "./components/HoveredList";
import { Wrapper, LeftBlock } from "./styles/AppStyles";

function App() {
  const [modes, setModes] = useState(null);
  const [selectedMode, setSelectedMode] = useState("");
  const [gridSize, setGridSize] = useState(0);
  const [hovered, setHovered] = useState([]);

  useEffect(() => {
    const fetchModes = async () => {
      try {
        const response = await fetch(
          "https://60816d9073292b0017cdd833.mockapi.io/modes"
        );
        const data = await response.json();
        const uniqueModes = Array.from(
          new Set(data.map((mode) => mode.id))
        ).map((id) => {
          return data.find((mode) => mode.id === id);
        });
        setModes(uniqueModes);
      } catch (error) {
        console.error("Error fetching modes:", error);
      }
    };

    fetchModes();
  }, []);

  const handleStart = () => {
    const mode = modes.find((mode) => mode.id === selectedMode);
    if (mode) {
      setSelectedMode(mode.id);
      setGridSize(mode.field);
      setHovered([]);
      setHovered([]);
    }
  };

  return (
    <Wrapper>
      <LeftBlock>
        <SelectMode
          modes={modes}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          handleStart={handleStart}
        />
        {gridSize > 0 && (
          <SquareGrid
            size={gridSize}
            hoveredSquares={hovered}
            setHovered={setHovered}
          />
        )}
      </LeftBlock>

      <HoveredList hoveredSquares={hovered} />
    </Wrapper>
  );
}

export default App;
