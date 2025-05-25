import PexelsImg from "./component/API";
import React, { useState } from "react";
import SearchInput from "./component/Search/Search";
import './App.css'
// import ImgCard from "./component/ImgCard/ImgCard";



const App: React.FC = ()=> {

  const [query, setQuery] = useState("nature");

  const handleSearch = (newQuery: string) => {
  
    if (newQuery) {
      setQuery(newQuery);
    }
  };


  return (
    <>
     <p>WEB!</p>
       <SearchInput onSearch={handleSearch}/>
     <PexelsImg query={query}/>
   
     {/* <ImgCard query={query}/> */}




    </>
  )
}

export default App
