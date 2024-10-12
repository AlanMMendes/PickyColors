import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CiPickerHalf } from "react-icons/ci";
import { getContrastYIQ } from "../../utils";
import "./styles.css"; // Importa o CSS para o componente

const ColorPicker = ({ sendColor }) => {
  const [color, setColor] = useState("#3498db");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  return (
    <div className="color-picker">
      <button
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
        style={{
          backgroundColor: "transparent",
          border: "transparent",
          borderRadius: "25%",
          width: "2rem",
          height: "2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          zIndex: 0,
        }}
      >
        <CiPickerHalf
          style={{
            color: getContrastYIQ(color),
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
          <HexColorPicker
            color={color}
            onChange={(event) => {
              sendColor(event), setColor(event);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
