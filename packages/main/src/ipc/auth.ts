import { ipcMain } from "electron";

const main = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ipcMain.handle("auth-login", async (event, data: AuthAPI.LoginForm) => {
    return {};
  });
};

export default main;
