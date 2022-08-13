import { useEffect } from "react";
import { useState } from "react";
import ArrowTop from "./components/ArrowTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhotosGrid from "./components/PhotosGrid";
import useActiveArrowTop from "./hooks/useActiveArrowTop";
import "./styles.css";

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
