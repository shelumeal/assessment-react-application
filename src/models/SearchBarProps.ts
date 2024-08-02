import SuggestionResponse from "./SuggestionResponse";

interface SearchBarProps {
  searchText: string;
  setSearchText: (term: string) => void;
  handleSearch: () => void;
  suggestionResponse?: SuggestionResponse | null;
  showSuggestions:boolean;
  handleReset:()=>void;
  handleSugesstionClick:(text: string)=>void
}

export default SearchBarProps;
