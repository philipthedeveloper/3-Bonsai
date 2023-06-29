import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Accordion = ({ data: { question, answer } }) => {
  const butRef = useRef(null);

  useEffect(() => {
    butRef.current.addEventListener("click", function () {
      console.log("clicked");
      this.classList.toggle("active");
      const text = this.nextElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = "";
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  }, []);

  return (
    <AccordionContainer>
      <AccordionBtn ref={butRef}>
        <Question>{question}</Question>
        <i className="fi fi-rr-caret-down"></i>
      </AccordionBtn>
      <Panel>
        <p>{answer}</p>
      </Panel>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const AccordionBtn = styled.button`
  width: 100%;
  padding: 1.875rem 0rem;
  border: none;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  transition: 0.4s;
  text-align: left;
  background-color: transparent;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  i {
    width: 25px;
    height: 25px;
    font-size: 1.5rem;
    color: var(--black-green);
    transition: 0.5s ease;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  &.active i {
    transform: rotateZ(180deg);
  }
`;

const Question = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--black-green);
`;

const Panel = styled.div`
  font-family: sans-serif;
  font-size: 0.9rem;
  line-height: 1.5rem;
  background-color: rgb(248, 248, 248);
  overflow: hidden;
  transition: 0.5s;
  max-height: 0;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  p {
    padding: 1rem 1.5rem;
    color: var(--black-green);
  }
`;
export default Accordion;
