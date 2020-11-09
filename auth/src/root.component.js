import React from "react";
import { navigate } from "@reach/router";
import { get } from "@mouts/api";

export default function Root(props) {
  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#343a40"
      }}
    >
      <h2 style={{ color: "white" }}>Single-SPA</h2>
      <form style={{ width: "400px" }}>
        <div class="form-group">
          <label style={{ color: "white" }}>Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label style={{ color: "white" }}>Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
      </form>
      <button
        class="btn btn-primary"
        onClick={() => {
          get(`/auth`).then(() => {
            navigate("/application-one");
          });
        }}
      >
        Send
      </button>
    </div>
  );
}
