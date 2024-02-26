import React from "react";
import { ModeWrapper, ModeSelect, StartButton } from "./styles";

function SelectMode({ modes, handleStart, selectedMode, setSelectedMode }) {
  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <ModeWrapper>
      <ModeSelect value={selectedMode} onChange={handleModeChange}>
        {!selectedMode && (
          <option value="" disabled hidden>
            Pick mode
          </option>
        )}
        {modes &&
          modes.map((mode) => (
            <option key={mode.id} value={mode.id}>
              {`${mode.name}, size: ${mode.field}`}
            </option>
          ))}
      </ModeSelect>
      <StartButton onClick={handleStart} disabled={!selectedMode}>
        Start
      </StartButton>
    </ModeWrapper>
  );
}

export default SelectMode;
