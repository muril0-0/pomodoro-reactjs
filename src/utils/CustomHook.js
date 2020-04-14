import React, { createContext, useState, useContext } from "react";

const CustomContext = createContext();

export default function CustomProvider({ children }) {
  const [Work, setWork] = useState(25);
  const [Relax, setRelax] = useState(5);

  return (
    <CustomContext.Provider value={{ Work, setWork, Relax, setRelax }}>
      {children}
    </CustomContext.Provider>
  );
}

export function useWork() {
  const context = useContext(CustomContext);
  const { Work, setWork } = context;
  return { Work, setWork };
}

export function useRelax() {
  const context = useContext(CustomContext);
  const { Relax, setRelax } = context;
  return { Relax, setRelax };
}
