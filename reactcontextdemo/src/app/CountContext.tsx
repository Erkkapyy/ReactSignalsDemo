import React, { ReactNode } from "react";

const CountContext = React.createContext<any>(null);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        incrementCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export function useCountContext() {
  return React.useContext(CountContext);
}
