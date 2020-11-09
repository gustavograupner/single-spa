import React, { useEffect, useState } from "react";
import { links } from "./root.helper";
import { Link } from "@reach/router";
import { eventListener } from "@mouts/event";
import OperationTypes from "./types/OperationTypes";

export default function Root(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    eventListener("@mouts/counter", event => {
      switch (event.detail) {
        case OperationTypes.ADD:
          setCounter(oldCounter => oldCounter + 1);
          break;
        case OperationTypes.SUB:
          setCounter(oldCounter => oldCounter - 1);
          break;
      }
    });
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link
        key={"/application-one"}
        className="navbar-brand"
        to={"/application-one"}
      >
        Single-SPA
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mr-auto">
          {links.map(link => {
            return (
              <Link
                key={link.href}
                className="nav-link"
                to={link.href}
                getProps={({ isCurrent }) => {
                  return {
                    className: isCurrent ? "nav-link active" : "nav-link"
                  };
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <h2 class="navbar-text">{counter}</h2>
        <div style={{ marginLeft: "20px" }}>
          <Link class="navbar-text" to={"/"}>
            Sair
          </Link>
        </div>
      </div>
    </nav>
  );
}
