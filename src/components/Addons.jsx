import React from "react";
import styled from "styled-components";
import addons from "../constants/addon-data";
import AddonCard from "./Addon";

const Addons = () => {
  return (
    <AddonContainer>
      <HeadingContainer>
        <Heading>
          Take it to the <br />
          next level with add-ons
        </Heading>
      </HeadingContainer>
      <AddonsContainer>
        <AddonsListContainer>
          {addons.map((addon) => (
            <AddonCard data={addon} key={addon.name} />
          ))}
        </AddonsListContainer>
      </AddonsContainer>
    </AddonContainer>
  );
};

const AddonContainer = styled.div`
  padding-bottom: 6.25rem;

  @media (max-width: 768px) {
    padding-bottom: 3.75rem;
  }
`;
const HeadingContainer = styled.div`
  max-width: 320px;
  margin: auto;
`;
const Heading = styled.h2`
  color: var(--black-green);
  font-size: 2.625rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AddonsContainer = styled.div``;
const AddonsListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  gap: 1.875rem;
  margin-top: 3.75rem;
`;

export default Addons;

export { Heading };
