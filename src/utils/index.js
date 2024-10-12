import chroma from "chroma-js";

export const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

export function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substring(1, 3), 16);
  var g = parseInt(hexcolor.substring(3, 5), 16);
  var b = parseInt(hexcolor.substring(5, 7), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

export const generateColors = (color, size) => {
  const middle = size / 2;
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
