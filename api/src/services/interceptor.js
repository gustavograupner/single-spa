import fetchIntercept from "fetch-intercept";
import { getUserToken, setUserToken } from "../helpers/local-storage";

export default () => {
  fetchIntercept.register({
    request: function (url, config) {
      const userToken = getUserToken();
      if (userToken) {
        config.headers.append("token", userToken);
      }
      return [url, config];
    },

    response: function (response) {
      if (response?.url?.includes("auth")) {
        const reponseTemp = response.clone();
        reponseTemp.json().then(response => {
          setUserToken(response.token);
        });
      }
      return response;
    }
  });
};
