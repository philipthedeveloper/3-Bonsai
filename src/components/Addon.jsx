import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AddonCard = ({ data }) => {
  return (
    <AddonCardContainer>
      <TopSection>
        <Heading>{data.name}</Heading>
        <DescriptionContainer>
          <DescriptionText>{data.desc}</DescriptionText>
        </DescriptionContainer>
        {data.link && (
          <LinkContainer>
            <LinkItem>Learn More</LinkItem>
          </LinkContainer>
        )}
      </TopSection>
      <BottomSection>
        <PriceTag>
          <Price className="price">{data.price}</Price>
          {data.price !== "Free" && (
            <PermonthTag className="per-month">/month</PermonthTag>
          )}
        </PriceTag>
      </BottomSection>
    </AddonCardContainer>
  );
};

const AddonCardContainer = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 1.25rem;
  min-height: 356px;
  padding: 2.5rem;
  flex: 1;
  max-width: 380px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    min-height: 290px;
    margin-bottom: 1.25rem;
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TopSection = styled.section`
  width: 100%;
  max-width: 250px;
`;

const Heading = styled.h5`
  font-size: 1.375rem;
  margin: 0.625rem 0;
`;
const DescriptionContainer = styled.div`
  backdrop-filter: blur(5px);

  margin-top: 1rem;
`;
const DescriptionText = styled.p`
  color: var(--gray-green);
  font-weight: 400;
  font-size: 0.925rem;
  margin-bottom: 0.625rem;
`;

const LinkContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--green);
  font-size: 0.925rem;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: var(--green);
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.5s ease;
  }

  &:hover::after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;

const BottomSection = styled.div``;

const PriceTag = styled.p`
  text-align: right;
  color: var(--black-green);
`;

const Price = styled.span`
  font-size: 2.25rem;
  font-weight: 800;
`;
const PermonthTag = styled.span`
  opacity: 0.5;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 700;
`;
export default AddonCard;
