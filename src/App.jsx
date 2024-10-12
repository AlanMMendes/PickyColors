import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import PalettsColor from "./components/PaletteColor";
import Sidebar from "./components/Sidebar";
import { generateColors, getContrastYIQ, hexToRgb } from "./utils";

function App() {
  const [baseColor, setBaseColor] = useState("#3498db");
  const colors = generateColors(baseColor, 40);

  const handleDataFromChild = (data) => {
    setBaseColor(data);
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
      <ToastContainer />

      <div
        style={{
          display: "flex",
          padding: "1rem",
          flexDirection: "column",
          borderRadius: "2rem",
          background: baseColor,
          width: "50%",
          zIndex: 2,
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
                color: getContrastYIQ(baseColor),
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
                color: getContrastYIQ(baseColor),
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
                color: getContrastYIQ(baseColor),
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
                color: getContrastYIQ(baseColor),
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
          <PalettsColor width={100} height={100} key={index} bgColor={color} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignContent: "end",
          position: "fixed",
          bottom: "0",
          right: "0",
          margin: "1rem",
          zIndex: 10,
        }}
      >
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
