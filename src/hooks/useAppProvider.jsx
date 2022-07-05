import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppProvider = () => {
  return useContext(AppContext);
};

export default useAppProvider;
