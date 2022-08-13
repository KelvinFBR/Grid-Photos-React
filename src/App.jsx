import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhotosGrid from "./components/PhotosGrid";
import "./styles.css";

function App() {
  const [searchValue, setSearchValue] = useState("pc");

  const onNewValueSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header onNewValueSearch={onNewValueSearch} />
      <PhotosGrid searchValue={searchValue} />
      <Footer />
    </>
  );
}

export default App;
