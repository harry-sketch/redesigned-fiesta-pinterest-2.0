import { createContext, useState } from "react";
import unsplash from "../api/unsplash";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const handleSearch = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let pindata = [...results, ...pins];
      pindata.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setPins(pindata);
    });
  };

  const getRandomImages = () => {
    const pins = ["Tokyo", "ocean", "dog", "cat", "cars", "waterfall"];
    let promises = [];
    let pindata = [];
    pins.forEach((pinterm) => {
      promises.push(
        getImages(pinterm).then((res) => {
          let results = res.data.results;
          pindata = pindata.concat(results);
          pindata.sort((a, b) => {
            return 0.5 - Math.random();
          });
        })
      );
      Promise.all(promises).then(() => {
        setPins(pindata);
      });
    });
  };
  return (
    <AppContext.Provider value={{ getRandomImages, pins, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
