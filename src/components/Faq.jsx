import React from "react";
import Accordion from "./Accordion";
import faqs from "../constants/faqs-data";
import styled from "styled-components";

const Faq = () => {
  return (
    <FaqContainer>
      <Heading>Frequently asked questions</Heading>
      <AccordionContainer>
        {faqs.map((faq) => (
          <Accordion data={faq} key={faq.question} />
        ))}
      </AccordionContainer>
    </FaqContainer>
  );
};

const FaqContainer = styled.section`
  padding-bottom: 7.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 60%;
    height: calc(100% - 7.5rem);
    z-index: -1;
    right: -180px;
    background: url(https://assets-global.website-files.com/635ac9564cc3682ce1536786/63d94c7a62e51410f00e2adc_Branch_3-p-800.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  }
`;

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin-top: 3.125rem;
`;
const Heading = styled.h2``;
export default Faq;
