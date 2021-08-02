declare namespace AuthAPI {
  interface LoginForm {
    username: string;
    password: string;
  }

  export type LoginFn = (data: LoginForm) => Promise<{ err?: Error }>;

  export interface Fn {
    login: LoginFn;
  }
}
