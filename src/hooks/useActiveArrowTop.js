import { useEffect, useState } from "react";

const useActiveArrowTop = (initial) => {
  const [scrollHeight, setScrollHeight] = useState(initial);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 1200) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    };

    return () => {};
  }, []);

  return { scrollHeight };
};

export default useActiveArrowTop;
