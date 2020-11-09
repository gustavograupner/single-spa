import React from "react";
import { eventEmitter } from "@mouts/event";
import Parcel from "single-spa-react/parcel";
// @mouts/navbar

export default function Root({ name }) {
  const handleOnClick = () => {
    eventEmitter("@mouts/counter", "add");
  };

  return (
    <>
      {/* <Parcel config={() => System.import('@mouts/navbar')} /> */}
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
        <button type="button" class="btn btn-primary" onClick={handleOnClick}>
          ADD
        </button>
      </div>
    </>
  );
}
