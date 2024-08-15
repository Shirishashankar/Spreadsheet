import { useState } from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

// SearchBar component provides a search functionality for the spreadsheet.
export default function SearchBar() {
  // Destructure searchCells from the zustand store.
  const { searchCells } = useSpreadsheetStore();

  // Local state to manage the search query.
  const [query, setQuery] = useState('');

  // handleSearch triggers the search action using the query.
  const handleSearch = () => {
    searchCells(query);
  };

  return (
    <div className="search-bar-container">
      {/* Input field for entering the search query. */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-bar-input"
      />
      {/* Button to initiate the search when clicked. */}
      <button
        onClick={handleSearch}
        className="search-bar-button"
      >
        Search
      </button>
    </div>
  );
}
