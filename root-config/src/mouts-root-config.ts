import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine
} from "single-spa-layout";
const routes = constructRoutes(document.querySelector("#single-spa-layout"));

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  }
});

constructLayoutEngine({ routes, applications });
applications.forEach(application => {
  if (application.name === "@mouts/navbar") {
    application.activeWhen = location =>
      location.pathname !== "/auth" && location.pathname !== "/";
  }
  registerApplication(application);
});

start({
  urlRerouteOnly: true
});
