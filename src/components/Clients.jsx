import React from "react";
import { Heading } from "./Addons";
import styled from "styled-components";
import quotes from "../constants/quotes-data";
import Quote from "./Quote";

const Clients = () => {
  return (
    <div>
      <SizingContainer>
        <Heading>
          Trusted by 500,000+ <br /> business owners
        </Heading>
        <ClientLogoContainer>
          <ClientsLogos>
            <Logo src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/6368ee758abc407679fe354f_g2.svg" />
            <Logo src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/6446774a3c07c5353f34dd13_Capterra.svg" />
          </ClientsLogos>
        </ClientLogoContainer>
        <QuoteSection>
          <QuotesPositionController>
            <VerticalFlexContainer>
              {quotes.map((quoCol) => (
                <HorizontalFlexContainer>
                  {quoCol.map((quote) => (
                    <Quote quote={quote} />
                  ))}
                </HorizontalFlexContainer>
              ))}
            </VerticalFlexContainer>
          </QuotesPositionController>
        </QuoteSection>
      </SizingContainer>
    </div>
  );
};

const SizingContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: auto;

  @media (min-width: 992px) {
    width: 100%;
    max-width: none;
    overflow: hidden;
  }
`;

const ClientLogoContainer = styled.div`
  margin-top: 2.5rem;
`;
const ClientsLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    img {
      height: 50px;
      border: none !important;
    }
  }
`;
const Logo = styled.img`
  &:first-child {
    padding-right: 4.375rem;
    border-right: 1px solid var(--border-color);
  }
`;

const QuoteSection = styled.div`
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const QuotesPositionController = styled.div`
  @media (min-width: 992px) {
    margin-left: -5%;
  }
`;

const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 992px) {
    overflow-x: scroll;
  }
`;

const HorizontalFlexContainer = styled.div`
  display: flex;
  flex-row: column;
  gap: 1.25rem;
`;

export default Clients;
