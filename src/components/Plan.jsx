import React, { useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Feature from "./Feature";

const Plan = ({ data, currentPlan, index }) => {
  const { type, price, ideal, features } = data;
  const isMiddlePlan = useMemo(() => index === 1, [index]);

  return (
    <PlanContainer className="plan-card">
      {isMiddlePlan && (
        <Underlay>
          <UnderlayText>
            {currentPlan === "monthly"
              ? "Most popular"
              : "Best value for money"}
          </UnderlayText>
        </Underlay>
      )}
      <PlanType>{type}</PlanType>
      <PriceTag>
        <DollarSign className="dollar-sign">$</DollarSign>
        <Price className="price">{price}</Price>
        <PermonthTag className="per-month">/month</PermonthTag>
      </PriceTag>
      <StartForFree to={"/sign_up"}>Start for free</StartForFree>
      <IdealText>
        {ideal}{" "}
        {currentPlan === "yearly" && (
          <>
            <br /> Billed annually
          </>
        )}
      </IdealText>
      <Seperator />
      <FeaturesContainer>
        {features.map((feature) => (
          <Feature feature={feature} key={feature} />
        ))}
      </FeaturesContainer>
      <span style={{ display: "inline-block", marginTop: "1.875rem" }}>
        <StartForFree to={"/sign_up"}>Start for free</StartForFree>
      </span>
    </PlanContainer>
  );
};

const PlanContainer = styled.div`
  padding: 56px 35px 40px;
  box-shadow: 0px 0px 1.25rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--white);

  @media (max-width: 768px) {
    h4 {
      font-size: 1.625rem;
    }
  }
`;

const PlanType = styled.h4`
  font-size: 2rem;
  color: var(--black-green);
  text-align: center;
  font-weight: 700;
  margin: 0.625rem 0;
`;

const PriceTag = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
  color: var(--black-green);
  margin-top: 20px;
`;
const DollarSign = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;
const Price = styled.span`
  font-size: 2rem;
  font-weight: 800;
  position: relative;
  top: -5px;
`;
const PermonthTag = styled.span`
  opacity: 0.5;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 700;
`;

const StartForFree = styled(Link)`
  white-space: nowrap;
  font-size: 1rem;
  text-decoration: none;
  color: var(--gray);
  font-weight: 500;
  transition: 0.4s ease;
  padding: 0.7rem 1.5rem;
  background-color: var(--green);
  color: var(--white);
  transition: 0.4s ease;
  border-radius: 2rem;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    color: var(--green);
    background-color: var(--white);
  }
`;

const IdealText = styled.p`
  text-align: center;
  margin-top: 1.25rem;
  line-height: 150%;
  color: var(--black-green);
  backdrop-filter: blur(5px);
  max-width: 250px;
  font-size: 0.875rem;
`;

const Seperator = styled.div`
  margin: 1.875rem 0;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-template-rows: auto auto;
`;

const Underlay = styled.div`
  z-index: -1;
  width: 104%;
  height: 105%;
  background-color: var(--orange);
  padding: 5px 6px 6px;
  position: absolute;
  top: -4%;
  left: -2%;
  border-radius: 1.25rem;
`;

const UnderlayText = styled.p`
  color: var(--white);
  text-align: center;
  line-height: 125%;
  font-size: 0.875rem;
`;
export default Plan;

export { Seperator, StartForFree };
