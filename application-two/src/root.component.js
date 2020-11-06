import React from "react";
import { eventEmitter } from "@mouts/event";

export default function Root({ name }) {
  const handleOnClick = () => {
    eventEmitter("@mouts/counter", "sub");
  };

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>{name}</h5>
      <button type="button" class="btn btn-primary" onClick={handleOnClick}>
        SUB
      </button>
    </div>
  );
}
