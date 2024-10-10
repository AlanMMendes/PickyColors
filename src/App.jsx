import chroma from "chroma-js";
import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import PalettsColor from "./components/PaletteColor";
import Sidebar from "./components/Sidebar";
import { hexToRgb } from "./utils";

function App() {
  const [baseColor, setBaseColor] = useState("#3498db");
  const [open, setOpen] = useState(false);
  const size = 40;
  const middle = size / 2;

  const generateColors = (color) => {
    const colors = [];
    for (let i = 0; i < size; i++) {
      colors.push(
        chroma(color)
          ?.brighten(i / middle)
          ?.hex()
      );
    }
    return colors;
  };
  const colors = generateColors(baseColor);

  const handleDataFromChild = (data) => {
    console.log(data);
    setBaseColor(data);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sidebar isOpen={open} />
      <div
        style={{
          display: "flex",
          padding: "1rem",
          flexDirection: "column",
          borderRadius: "2rem",
          background: baseColor,
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <h3
              style={{
                height: "0",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
              }}
            >
              HEX
            </h3>
            <input
              value={baseColor}
              style={{
                width: "100%",
                fontSize: "1rem",
                borderRadius: "0",
                background: "transparent",
                border: "transparent",
                outline: "none",
                outlineColor: "transparent",
              }}
              type="text"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              width: "8rem",
            }}
          >
            <h3
              style={{
                height: "0",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
              }}
            >
              RGB
            </h3>
            <input
              value={hexToRgb(baseColor)}
              style={{
                width: "100%",
                fontSize: "1rem",
                borderRadius: "0",
                background: "transparent",
                border: "transparent",
                outline: "none",
                outlineColor: "transparent",
              }}
              type="text"
            />
          </div>
          <ColorPicker sendColor={handleDataFromChild} />
        </div>
      </div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "2rem",
        }}
      >
        {colors?.map((color, index) => (
          <PalettsColor open={handleOpen} key={index} bgColor={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
