import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CiPickerHalf } from "react-icons/ci";
import "./styles.css"; // Importa o CSS para o componente

const ColorPicker = ({ sendColor }) => {
  const [color, setColor] = useState("#3498db"); // Cor inicial
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div className="color-picker">
      <button
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
        style={{
          backgroundColor: "transparent",
          border: "0.5px solid white",
          borderRadius: "25%",
          width: "2rem",
          height: "2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CiPickerHalf
          style={{
            color: "white",
            fontSize: "1.5rem",
          }}
        />
      </button>
      {displayColorPicker && (
        <div
          className="popover"
          style={{
            position: "absolute",
            top: "100%",
            right: "100%",
            marginTop: "1rem",
          }}
        >
          <div className="cover" onClick={() => setDisplayColorPicker(false)} />
          <HexColorPicker color={color} onChange={sendColor} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
