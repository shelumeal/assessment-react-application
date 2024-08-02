import type { Highlight } from '../../models/SearchResponse';

// Helper function to apply highlights
export const applyHighlights = (text: string, highlights: Highlight[]): React.ReactNode[] => {
    let highlightedText: React.ReactNode[] = [];
    let lastIndex = 0;
  
    highlights.forEach((highlight, index) => {
      const { BeginOffset, EndOffset } = highlight;
      // Add text before highlight
      if (lastIndex < BeginOffset) {
        highlightedText.push(text.substring(lastIndex, BeginOffset));
      }
      // Add highlighted text
      highlightedText.push(
        <span key={index} className="highlight">
          {text.substring(BeginOffset, EndOffset)}
        </span>
      );
      lastIndex = EndOffset;
    });
  
    // Add remaining text after last highlight
    if (lastIndex < text.length) {
      highlightedText.push(text.substring(lastIndex));
    }
  
    return highlightedText;
  };
