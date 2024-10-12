import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import { useSelector } from "react-redux";
import PalettsColor from "../PaletteColor/index";
import "./styles.css"; // Importa o CSS

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => state.addColor.items);
  return (
    <>
      <IoCreate
        style={{
          fontSize: "2rem",
        }}
        onClick={() => setOpen(!open)}
      />
      <div className={`sidebar ${open ? "open" : "close"}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            margin: "5px",
          }}
        >
          <IoMdClose onClick={() => setOpen(false)} />
        </div>

        {open && (
          <div className="sidebar-content">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {items.slice(0, 6).map((item, index) => {
                return (
                  <PalettsColor
                    width={80}
                    height={80}
                    key={index}
                    bgColor={item?.color}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
