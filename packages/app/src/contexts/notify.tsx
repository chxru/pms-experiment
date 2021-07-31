import React from "react";

const NotifyContext = React.createContext<{
  NewAlert: ({
    msg,
    status,
    description,
  }: {
    msg: string;
    status: "success" | "error" | "warning" | "info";
    description?: string;
  }) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  NewAlert: () => {},
});

export default NotifyContext;
