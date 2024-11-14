import SearchBarProps from "../../models/SearchBarProps";
import { Search, XLg } from "react-bootstrap-icons";
import "./SearchBar.scss";

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  setSearchText,
  handleSearch,
  suggestionResponse,
  showSuggestions,
  handleReset,
  handleSugesstionClick,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClick = (): void => {
    handleSearch();
  };

  const handleClear = (): void => {
    handleReset();
  };

  const highlightSuggestion = (text: string) => {
    return text.replace(
      new RegExp(searchText, "gi"),
      (match) => `<span class="highlight">${match}</span>`
    );
  };

  const handleSelect=(text: string):void=>{
    handleSugesstionClick(text);
  }

  return (
    <div data-testid="search-bar-container" className="search-bar">
      <div className="panel">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={searchText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></input>

          {searchText && (
            <div className="input-group-text icon-clear" onClick={handleClear}>
              <i>
                <XLg />
              </i>
            </div>
          )}
          <button
            className="btn btn-primary button-search"
            type="button"
            onClick={handleClick}
          >
            <i>
              <Search />
            </i>
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="suggestions">
            {suggestionResponse &&
              suggestionResponse.suggestions.length > 0 &&
              suggestionResponse.suggestions.map((value, index) => {
                // Highlight the search text in each suggestion
                return (
                  <div
                    className="text"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: highlightSuggestion(value) }} //dangerouslySetInnerHTML prop to render the highlighted suggestion as HTML
                    onClick={() => handleSelect(value)}
                  ></div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
