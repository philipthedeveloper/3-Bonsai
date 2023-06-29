import React, { useEffect, useState } from "react";
import plans from "../constants/plans";
import Plan from "./Plan";
import styled from "styled-components";

const Plans = ({ currentPlan }) => {
  const [planData, setPlanData] = useState(() => plans.monthly);

  useEffect(() => {
    if (currentPlan === "monthly") return setPlanData(plans.monthly);
    return setPlanData(plans.yearly);
  }, [currentPlan]);

  return (
    <PlansContainer>
      {planData.map((plan, index) => (
        <Plan
          data={plan}
          key={plan.type}
          currentPlan={currentPlan}
          index={index}
        />
      ))}
    </PlansContainer>
  );
};

const PlansContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 5.625rem;
  margin-bottom: 7.5rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    margin-top: 1.25rem;
    margin-bottom: 3.75rem;

    & > .plan-card {
      width: 70%;
      padding: 1.75rem;
    }
  }

  @media (max-width: 600px) {
    & > .plan-card {
      width: 100%;
    }
  }
`;

export default Plans;
