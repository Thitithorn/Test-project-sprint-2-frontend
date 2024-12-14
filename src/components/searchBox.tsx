import React from "react";
import { useState } from "react";

interface SearchProps {
    onSearch: (query: string) => void
}

const SearchBox: React.FC<SearchProps> = ({ onSearch }) => {
    const [search, setSearch] = useState<string>('');

    // function update search value while typing..
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    };

    // remove space of input value
    const handleSearch = () => {
        onSearch(search.trim());
    };

    // this function is working, when press ENTER button
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
          }
    }

    return (
        <div className="flex pb-4">
            <input 
                type="text"
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="กรุณากรอกคำค้นหา.."
            />
            <button onClick={ handleSearch } className="bg-slate-500 px-4 py-2 rounded-lg">ค้นหา</button>
        </div>
    )
};

export default SearchBox
