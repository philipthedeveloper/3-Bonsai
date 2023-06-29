import React from "react";
import styled from "styled-components";

const Quote = ({ quote }) => {
  return (
    <QuoteText>
      {quote.split("/").map((str, index) => {
        const first = index % 2 === 0;
        if (str.startsWith("span-"))
          return (
            <QuoteSpan>
              {first && <>&ldquo;</>}
              {str.slice(5)}
              {first ? <> </> : <>&rdquo;</>}
            </QuoteSpan>
          );
        return (
          <>
            {first && <>&ldquo;</>}
            {str}
            {first ? <> </> : <>&rdquo;</>}
          </>
        );
      })}
    </QuoteText>
  );
};

const QuoteText = styled.p`
  color: var(--black-green);
  font-size: 1.25rem;
  white-space: nowrap;
  padding: 1.25rem 1.125rem;
  background-color: var(--quote-background);
  border-radius: 0.625rem;
  font-weight: 700;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;
const QuoteSpan = styled.span`
  color: var(--gray-green);
`;
export default Quote;
