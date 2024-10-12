import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus, FaRegCopy } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { addItem, removeItem } from "../../features/addColor";
import { getContrastYIQ } from "../../utils";
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
  width: width;
  height: height;

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
    transition: background-color 0.3s ease;
  }
`;

const HoverTextStyled = styled.p`
  opacity: 0;
`;

const IconContainer = styled.div`
  font-size: 1rem;
  color: inherit;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #e74c3c;
  }
`;

const PalettsColor = ({ bgColor, height, width }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.addColor.items);
  const checkColor = items.map((items) => items.color).includes(bgColor);

  const handleAddItem = (color) => {
    const newItem = { id: Date.now(), color: color };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast(text + " copied to clipboard!", {
      position: "top-left",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      closeButton: false,
      style: {
        backgroundColor: text,
        color: getContrastYIQ(text),
      },
    });
  };

  return (
    <>
      <StyledButton
        style={{
          backgroundColor: bgColor,
          height: height,
          width: width,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {checkColor && (
            <IconContainer>
              <FaMinusCircle
                onClick={() => handleRemoveItem(bgColor)}
                style={{
                  fontSize: "1.5rem",
                  margin: "5px",
                }}
              />
            </IconContainer>
          )}
        </div>

        <HoverTextStyled className="hover-text">
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!checkColor && (
              <IconContainer>
                <FaCirclePlus
                  onClick={() => handleAddItem(bgColor)}
                  style={{
                    fontSize: "1.5rem",
                    margin: "5px",
                  }}
                />
              </IconContainer>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <IconContainer>
              <FaRegCopy
                onClick={() => copyToClipboard(bgColor)}
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </IconContainer>
          </div>
        </HoverTextStyled>
      </StyledButton>
    </>
  );
};
export default PalettsColor;
