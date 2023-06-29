import React from "react";
import styled from "styled-components";

const Feature = ({ feature }) => {
  return (
    <FeatureContainer>
      <i className="fi fi-sr-badge-check"></i>
      <FeatureText isEvery={feature.startsWith("Everything in")}>
        {feature}
      </FeatureText>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  i {
    margin-right: 2vw;
    position: relative;
    bottom: -3px;
    color: var(--green);
  }
`;
const FeatureText = styled.p`
  font-weight: ${(props) => (props.isEvery ? 600 : "initial")};
  color: var(--gray-green);
`;

export default Feature;
