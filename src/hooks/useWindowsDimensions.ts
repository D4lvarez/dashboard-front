import { useState, useEffect } from "react";

const getWindowsDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    width,
    height,
  };
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowsDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowsDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
