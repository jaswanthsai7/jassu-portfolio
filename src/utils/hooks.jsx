"use client";

import {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from "react";



const Context = createContext({
  variant: "DEFAULT",
  setVariant: () => { },
});

const VariantProvider = ({ children }) => {
  const [variant, setVariant] = useState("DEFAULT");

  return (
    <Context.Provider value={{ variant, setVariant }}>
      {children}
    </Context.Provider>
  );
};

const useVariants = () => {
  const { setVariant, variant } = useContext(Context);

  return { variant, setVariant };
};



function useMediaQuery(query, options) {
  const [matches, setMatches] = useState(
    options?.defaultValue ?? false
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    if (options?.initializeWithValue !== false) {
      setMatches(media.matches); // Initialize with initial state
    }

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [query, options]);

  return matches;
}

export { useMediaQuery, useVariants, VariantProvider };
