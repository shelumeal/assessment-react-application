import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import SearchResponse from "../../models/SearchResponse";
import SuggestionResponse from "../../models/SuggestionResponse";
import searchService from "../../services/SearchService";
import suggestionService from "../../services/SuggestionService";
import useDebounce from "../../common/hooks/useDebounce";

const SearchContainer: React.FC = () => {

  /* Initialize state objects */
  const initialSuggestion: SuggestionResponse = {
    stemmedQueryTerm: "",
    suggestions: [],
  };

  const initialSearch: SearchResponse = {
    TotalNumberOfResults: 0,
    Page: 0,
    PageSize: 0,
    ResultItems: [],
  };

  /* Define states */
  const [searchText, setSearchText] = useState<string>("");
  const [searchResponse, setSearchResult] =
    useState<SearchResponse>(initialSearch);
  const [suggestionResponse, setSuggestions] =
    useState<SuggestionResponse>(initialSuggestion);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestionSelected, setSuggestionSelected] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  /* Debounce the suggestion search by 1 second to avoid mutiple api calls */
  const debouncedSearch = useDebounce(searchText, 1000);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearch.length > 2 && !suggestionSelected) {
        handleSuggestion();
      } else {
        setShowSuggestions(false);
      }
    };

    if (debouncedSearch) fetchSuggestions();
  }, [debouncedSearch]);

  /* Function to fetch search data */
  const handleSearch = async () => {
    const { data, error } = await searchService.fetchSearchResults();
    setSearchResult(data);
    if (error.length > 0) setError(error);
  };

  /* Function to fetch suggestion data */
  const handleSuggestion = async () => {
    const { data, error } = await suggestionService.fetchSuggestionResults();
    if (error.length > 0) {
      setError(error);
    }else{
      setSuggestions(data);
      setShowSuggestions(true);
    }
  };

  /* Function to reset states */
  const handleReset = () => {
    setSearchText("");
    setShowSuggestions(false);
    setSuggestionSelected(false);
  };

  /* Function to trigger after a suggestion is selected */
  const handleSugesstionClick = (text: string) => {
    setSearchText(text);
    setSuggestionSelected(true);
    setShowSuggestions(false);
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setError('')}></button>
        </div>
      )}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        suggestionResponse={suggestionResponse}
        showSuggestions={showSuggestions}
        handleReset={handleReset}
        handleSugesstionClick={handleSugesstionClick}
      ></SearchBar>
      <SearchResult response={searchResponse}></SearchResult>
    </>
  );
};

export default SearchContainer;
