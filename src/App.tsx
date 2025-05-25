import PexelsImg from "./component/API";
import React, { useState } from "react";
import SearchInput from "./component/Search/Search";
import "./App.css";

const App: React.FC = () => {
  const [query, setQuery] = useState("nature");

  const handleSearch = (newQuery: string) => {
    if (newQuery) {
      setQuery(newQuery);
    }
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <PexelsImg query={query} />

    </>
  );
};

export default App;
