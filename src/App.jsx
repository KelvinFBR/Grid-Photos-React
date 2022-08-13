import { useState } from "react";
import Header from "./components/Header";
import PhotosGrid from "./components/PhotosGrid";
import "./styles.css";

function App() {
  const [searchValue, setSearchValue] = useState("pc");

  const onNewValueSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onNewValueSearch={onNewValueSearch} />
      <PhotosGrid searchValue={searchValue} />
    </div>
  );
}

export default App;
