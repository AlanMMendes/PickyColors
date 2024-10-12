import { useState } from "react";
import { IoCreate } from "react-icons/io5";

function ColorStyleGenerator() {
  const [open, setOpen] = useState();

  return (
    <div>
      <IoCreate
        style={{
          fontSize: "2rem",
        }}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}

export default ColorStyleGenerator;
