import React from "react";
import styled from "styled-components";
import footerContent from "../constants/footer-data";
import FooterColumn from "./FooterColumn";
import FirstFooterColumn from "./FirstFooterColumn";
import { Seperator } from "./Plan";
import "boxicons";

const Footer = () => {
  return (
    <MainFooter>
      <SizingContainer>
        <PositioningContainer>
          {footerContent.map((content, i) =>
            i === 0 ? (
              <FirstFooterColumn data={content} />
            ) : (
              <FooterColumn data={content} />
            )
          )}
        </PositioningContainer>
        <Seperator />
        <SocialFooter>
          <SocialIconsContainer>
            <box-icon
              name="linkedin"
              type="logo"
              class="box-icon"
              color="#fff"
            ></box-icon>
            <box-icon
              name="twitter"
              type="logo"
              class="box-icon"
              color="#fff"
            ></box-icon>
          </SocialIconsContainer>
          <InsuranceContainer>
            <InsuranceText>&copy; Bonsai 2023</InsuranceText>
            <InsuranceText>FDIC insured up to $250K</InsuranceText>
          </InsuranceContainer>
        </SocialFooter>
        <BottomInfoContainer>
          <BottomInfoText>
            ©2023 Bonsai Technologies Inc — FDIC insured up to $250,000.
            Payments, banking, and issuing services are provided by Stripe
            Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank
            (Member FDIC), respectively. Bonsai is not a law firm, and does not
            provide legal services, advice, or representation. Some product
            imagery is for illustrative purposes only and the actual product
            experience may differ.
          </BottomInfoText>
        </BottomInfoContainer>
      </SizingContainer>
    </MainFooter>
  );
};

const MainFooter = styled.footer`
  padding: var(--fifty-pixel) 0;
`;

const SizingContainer = styled.div`
  width: 90%;
  max-width: 1360px;
  margin: auto;
`;
const PositioningContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: auto;
    grid-auto-rows: auto;
    justify-content: center;
    justify-items: start;

    & > div {
      width: 100%;
      min-width: 350px;
    }
  }

  @media (max-width: 480px) {
    justify-content: stretch;
    & > div {
      min-width: initial;
    }
  }
`;

const SocialFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .box-icon {
    padding: 0.5rem;
    background-color: var(--green);
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const InsuranceContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const InsuranceText = styled.p`
  color: var(--gray-green);
  font-weight: 500;
  line-height: 150%;
  opacity: 0.5;
`;

const BottomInfoContainer = styled.div`
  margin: var(--forty-pixel) 0;
`;
const BottomInfoText = styled.p`
  font-size: 0.75rem;
  line-height: 120%;
  color: var(--gray-green);
  opacity: 0.5;
`;
export default Footer;
