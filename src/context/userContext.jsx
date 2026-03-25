import { createContext, useContext } from "react";
const user = {
  name: "mushtaq",
  email: "mushtaq@gmail.com",
};
export const userContext = createContext(user);

export const UserProvider = ({children}) => {
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
export const userUse = () => useContext(userContext);
