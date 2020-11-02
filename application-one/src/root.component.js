import React from "react";

export default function Root({ name }) {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h5>{name}</h5>
      <button type="button" class="btn btn-primary">
        ADD
      </button>
    </div>
  );
}
