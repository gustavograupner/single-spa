import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mouts/application-one",
  app: () => System.import("@mouts/application-one"),
  activeWhen: (location) => location.pathname === '/application-one',
  customProps: (name, location) => {
    return { authToken: "d83jD63UdZ6RS6f70D0" };
  }
});

registerApplication({
  name: "@mouts/application-two",
  app: () => System.import("@mouts/application-two"),
  activeWhen: (location) => location.pathname === '/application-two',
  customProps: (name, location) => {
    return { authToken: "d83jD63UdZ6RS6f70D0" };
  }
});

start({
  urlRerouteOnly: true,
});
