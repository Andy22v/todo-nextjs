import { createContext } from "react";

export const stateContext = createContext();

export const initialState = {
  todos: [],
  username: "pipo",
};
