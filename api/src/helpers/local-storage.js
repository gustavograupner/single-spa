const USER_TOKEN = "mouts-user-token";

export const setUserToken = (token) => {
  return localStorage.setItem(USER_TOKEN, token);
};

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN);
};

export const clearUserToken = () => {
  localStorage.removeItem(USER_TOKEN);
};
