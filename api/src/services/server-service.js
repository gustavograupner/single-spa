import { API_HOST } from "../config";
import { getUserToken } from "../helpers/local-storage";

function _genericRequest(method, url, body) {
  return new Promise(async (resolve, reject) => {
    const requestInit = {
      method,
      headers: new Headers({
        "Content-type": "application/json",
      }),
    };

    if (body) {
      requestInit.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${API_HOST}${url}`, requestInit);
      if (response) {
        resolve(response.json());
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function get(url) {
  return _genericRequest("GET", url);
}

export function post(url, body) {
  return _genericRequest("POST", url, body);
}

export function remove(url) {
  return _genericRequest("DELETE", url);
}

export function put(url, body) {
  return _genericRequest("PUT", url, body);
}
