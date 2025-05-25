import React, { useState } from "react";
import css from "./Search.module.css";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <div className={css.headerInput}>
       <form onSubmit={handleSubmit}>
        <div className={css.borderInput}>
            <input
      className={css.searchInput}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a picture"
      />

      <button className={css.btn} type="submit">SEARCH</button> 
        </div>
     
    </form> 
    </div>
    
  );
};

export default SearchInput;
