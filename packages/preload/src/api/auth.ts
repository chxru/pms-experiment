import { ipcRenderer } from "electron";

export const AUTH_API: AuthAPI.Fn = {
  login: (data: AuthAPI.LoginForm) => ipcRenderer.invoke("auth-login", data),
};
