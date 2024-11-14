import { describe, it } from "vitest";
import suggestionService from "../../services/SuggestionService";

const mocks = vi.hoisted(() => ({
    get: vi.fn(),
    post: vi.fn(),
  }));

  vi.mock('axios', async(importActual) => {
    const actual = await importActual<typeof import ('axios')>();
  
    const mockAxios = {
      default: {
        ...actual.default,
        create: vi.fn(() => ({
          ...actual.default.create(),
          get: mocks.get,
          post: mocks.post,
        })),
      },
    };
  
    return mockAxios;
  });

describe('SuggestionService',()=>{
    it('should return data when the API call is successful',async ()=>{
        const mockData = 
            {
              stemmedQueryTerm: "child",
              suggestions: [
                "child care",
                "child vaccination",
                "child health",
                "child education",
                "child development account",
                "register childcare",
              ],
            };

        mocks.get.mockResolvedValueOnce([{
            data: mockData,
            error:''
        }]);
        const { data, error } = await suggestionService.fetchSuggestionResults();
        console.log(data)

        expect(data).toEqual(mockData);
        expect(error).toBe("");
    })
})