interface SearchResponse {
  TotalNumberOfResults: number;
  Page: number;
  PageSize: number;
  ResultItems: ResultItem[]
}

interface ResultItem {
  DocumentId?: string;
  DocumentTitle: DocumentTitle;
  DocumentExcerpt: DocumentExcerpt;
  DocumentURI?: string;
}

interface DocumentTitle {
  Text: string;
  Highlights: Highlight[];
}

export interface Highlight {
  BeginOffset: number;
  EndOffset: number;
}

interface DocumentExcerpt {
  Text: string;
  Highlights: Highlight2[];
}

interface Highlight2 {
  BeginOffset: number;
  EndOffset: number;
}


export default SearchResponse;
