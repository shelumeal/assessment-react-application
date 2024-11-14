import SearchResultsProps from "../../models/SearchResponseProps";
import "./SearchResult.scss";
import { Search } from "react-bootstrap-icons";
import {applyHighlights} from "../../common/helpers/applyHighlights"
import type { Highlight } from '../../models/SearchResponse';

const SearchResult: React.FC<SearchResultsProps> = ({
  response =null,
}) => {
  if (!response) {
    return null;
  }

  const setHighlight =(text: string, highlights: Highlight[])=>{
    return applyHighlights(text,highlights)
  }

  return (
    <div className="result-container">
      <div className="panel">
        {response.TotalNumberOfResults > 0 && (
          <div className="mb-4 result-summary">
            Showing {response.Page} - {response.PageSize} of{" "}
            {response.TotalNumberOfResults} results
          </div>
        )}
        {response.ResultItems && response.ResultItems.length > 0 ? (
          response.ResultItems.map((result) => {
            return (
              <div className="result-card" key={result.DocumentId}>
                <div className="title">{result.DocumentTitle.Text}</div>
                <div className="description">{setHighlight(result.DocumentExcerpt.Text,result.DocumentExcerpt.Highlights)}</div>
                <a className="link" href={result.DocumentURI} target="_blank">
                  {result.DocumentURI}
                </a>
              </div>
            );
          })
        ) : (
          <div className="message-card">
            <i>
              <Search />
            </i>
            <p>
              To view details, Please click on the search button or press enter in
              the search bar located above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
