import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import styled from "styled-components";
import "./styles.css";

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 10px;
  color: white;
  border-radius: 10%;
  text-align: center;
  width: 8rem;
  height: 8rem;

  &:hover .hover-text {
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(139, 155, 165, 0.7);
  }
`;

const HoverTextStyled = styled.p`
  opacity: 0;
`;

const PalettsColor = ({ bgColor, open }) => {
  return (
    <StyledButton
      style={{
        backgroundColor: bgColor,
      }}
    >
      <HoverTextStyled className="hover-text">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaRegCopy />
          <GoArrowUpRight onClick={() => open(true)} />
        </div>
      </HoverTextStyled>
    </StyledButton>
  );
};
export default PalettsColor;
