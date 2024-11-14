import { SEARCH_API_ENDPOINT } from '../common/apiUrls';
import axios from 'axios';

const searchService={
    fetchSearchResults: async () => {
        try {
          const response = await axios.get(SEARCH_API_ENDPOINT);
          return { data: response.data, error: '' };
        } catch (error) {
          return { data: [], error: 'Unknown Network error occurred' };
        }
      },
};


export default searchService;