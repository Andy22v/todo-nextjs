import "@/styles/globals.css";
import { useReducer } from "react";
import { stateContext } from "@/state/context";
import { mainReducer } from "@/state/reducer";
import { initialState } from "@/state/context";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </stateContext.Provider>
  );
}
