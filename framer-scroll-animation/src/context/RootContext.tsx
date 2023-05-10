import { createContext } from "react";
import React from "react";

export const RootContext = createContext<
  React.MutableRefObject<HTMLElement | null> | undefined
>(undefined);
