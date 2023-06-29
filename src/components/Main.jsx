import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Plans from "./Plans";
import Addons from "./Addons";
import Faq from "./Faq";
import Clients from "./Clients";

const Main = () => {
  const durationBtnRef = useRef();
  const [currentPlan, setCurrentPlan] = useState("monthly");

  const toggleStyle = useCallback(
    function (e) {
      e.preventDefault();
      durationBtnRef.current.classList.toggle("right");
      currentPlan === "monthly"
        ? setCurrentPlan("yearly")
        : setCurrentPlan("monthly");
    },
    [currentPlan]
  );

  useEffect(() => {
    durationBtnRef?.current &&
      durationBtnRef.current.addEventListener("click", toggleStyle);
    return () =>
      durationBtnRef?.current.removeEventListener("click", toggleStyle);
  }, [currentPlan]);

  return (
    <MainContainer>
      <MainContentContainer>
        <IntroContainer>
          <IntroText>Pick the best plan for your business</IntroText>
        </IntroContainer>
        <DurationContainer>
          <DurationButton ref={durationBtnRef}>
            <span>Monthly</span>
            <span>
              Yearly
              <span>2months for free</span>
            </span>
          </DurationButton>
        </DurationContainer>
        <Plans currentPlan={currentPlan} />
        <Addons />
        <Faq />
      </MainContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main``;
const MainContentContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: auto;
  padding-top: 7.5rem;

  @media (max-width: 992px) {
    padding-top: 6.5625rem;
  }
`;
const IntroContainer = styled.div`
  max-width: 640px;
  margin: auto;
`;
const IntroText = styled.h1`
  font-size: 3.45rem;
  text-align: center;
  color: var(--black-green);
  font-weight: 700;
  line-height: 110%;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const DurationButton = styled.button`
  padding: 0.4rem;
  border-radius: 3.5rem;
  border: none;
  outline: none;
  background-color: #f0f0f5;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  & > * {
    position: relative;
    z-index: 1;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 55px;
    background-color: var(--black-green);
    border-radius: 3.5rem;
    z-index: 0;
    top: 0.4rem;
    left: 6.4px;
    right: 0;
    bottom: 0;
    width: 120px;
    transition: 0.3s ease;
  }

  &.right::before {
    width: 210px;
    left: 126.4px;
  }

  & > span {
    display: inline-block;
    padding: 1rem 2rem;
    color: var(--bluish-green);
    display: flex;
    align-items: center;
    max-height: 55px;

    span {
      color: var(--green);
      font-size: 0.6rem !important;
      margin-left: 1rem;
      font-weight: 700;
      padding: 0.3rem;
      border-radius: 1rem;
      background-color: #fff;
    }
  }

  & > span:first-child {
    min-width: 120px;
    justify-content: center;
    color: #fff;
  }

  & > span:last-child {
    min-width: 210px;
  }

  &.right > span:last-child {
    color: #fff;
  }

  &.right > span:first-child {
    color: var(--bluish-green);
  }
`;
const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 2rem;
`;

export default Main;
