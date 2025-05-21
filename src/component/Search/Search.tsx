import React, { useState } from "react";

interface SearchInputProps {
    onSearch: (query: string) => void;
}


const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(input.trim());
    }

    return (

        <form onSubmit={handleSubmit} >

            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />

<button type="submit">SEARCH</button>


        </form>
    )

}

export default SearchInput;