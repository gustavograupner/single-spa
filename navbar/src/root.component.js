import React, { useEffect } from "react";
import { links } from "./root.helper";
import { Link } from "@reach/router";

export default function Root(props) {
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
        <div class="navbar-nav">
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
      </div>
    </nav>
  );
}
