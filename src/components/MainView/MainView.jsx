import React, { useEffect } from "react";
import Pin from "../Pin/Pin";

// Custom Hooks
import useAppProvider from "../../hooks/useAppProvider";

const MainView = () => {
  const { getRandomImages, pins } = useAppProvider();
  useEffect(() => {
    getRandomImages();
  }, []);
  return (
    <div className="p-[2%] columns-7">
      {pins && pins.map((pin) => <Pin key={pin.id} pin={pin} />)}
    </div>
  );
};

export default MainView;
