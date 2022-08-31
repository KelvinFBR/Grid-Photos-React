import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";
import useActiveArrowTop from "./hooks/useActiveArrowTop";

import { Header, PhotosGrid, ArrowTop, Footer } from "./components";

function App() {
  const [searchValue, setSearchValue] = useState("pc");
  const { scrollHeight } = useActiveArrowTop(false);

  const onNewValueSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header onNewValueSearch={onNewValueSearch} />
      <PhotosGrid searchValue={searchValue} />
      <Footer />
      {scrollHeight ? <ArrowTop /> : null}
    </>
  );
}

export default App;
