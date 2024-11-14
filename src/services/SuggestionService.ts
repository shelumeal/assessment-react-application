import { SUGGESTION_API_ENDPOINT } from '../common/apiUrls';
import axios from 'axios';

const suggestionService={
    fetchSuggestionResults: async () => {
        try {
          const response = await axios.get(SUGGESTION_API_ENDPOINT);
          return { data: response.data, error: '' };
        } catch (error) {
          return { data: [], error: 'Unknown Network error occurred' };
        }
      },
};

export default suggestionService;