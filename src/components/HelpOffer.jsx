import React from "react";
import styled from "styled-components";
import Leave from "../assets/images/leave.png";
import HelpOfferMain from "../assets/images/help-offer-main.png";
import { Link } from "react-router-dom";
import { Seperator, StartForFree } from "./Plan";

const HelpOffer = () => {
  return (
    <SectionContainer>
      <SizingContainer>
        <PositioningContainer>
          <LeftContainer>
            <PositionedImage src={Leave} />
            <MainImage src={HelpOfferMain} />
          </LeftContainer>
          <RightContainer>
            <HeadingContainer>
              <Heading>
                Need help? We'll <br /> be right with you?
              </Heading>
            </HeadingContainer>
            <ParaText>
              Our friendly, speedy, Customer Support has all the answers and is
              here to help you.
            </ParaText>
            <LinkItem to={"#"}>Contact us</LinkItem>
            <Seperator />
            <HeadingContainer>
              <Heading>
                Quick to set up <br /> Even easier to use
              </Heading>
            </HeadingContainer>
            <ParaText>
              You get 7 days to try it for free. And if it's not what you
              expected, we guarantee your money back within the first two weeks.
            </ParaText>
            <StartForFree to={"#"}>Get Started</StartForFree>
          </RightContainer>
        </PositioningContainer>
        <OfferFooter>
          <FooterContentContainer>
            <InnerContentContainer>
              <FooterHeadingText>
                Get started in 30 seconds <br /> Free for 7 days
              </FooterHeadingText>
              <StartForFree to={"#"}>Start free trial now</StartForFree>
            </InnerContentContainer>
          </FooterContentContainer>
        </OfferFooter>
      </SizingContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding-top: 7.5rem;
  padding-bottom: 5rem;

  @media (max-width: 992px) {
    padding-top: 3.75rem;
    padding-bottom: 1.875rem;
  }
`;

const SizingContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: auto;
`;

const PositioningContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.875rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  position: relative;
  width: 51%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  max-width: 399px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
`;

const PositionedImage = styled.img`
  position: absolute;
  width: 250px;
  top: -2%;
  right: 10%;
  transform: rotate(-3deg);
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeadingContainer = styled.div``;
const Heading = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  color: var(--black-green);
  line-height: 100%;
`;

const ParaText = styled.p`
  color: var(--gray-green);
  font-size: 1rem;
  line-spacing: 0;
  font-weight: 400;
  line-height: 110%;
  font-size: 0.95rem;
  margin-bottom: 0.625rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--green);
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--green);
    width: 100%;
    height: 2px;
    transition: transform 0.4s ease;
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover::after {
    transform-origin: right;
    transform: scaleX(0);
  }
`;

const OfferFooter = styled.footer`
  margin-top: 7.5rem;

  @media (max-width: 480px) {
    margin-top: 3.75rem;
  }
`;
const FooterContentContainer = styled.div`
  padding: 2.5rem 4.375rem;
  border-radius: 1.5625rem;
  background-color: var(--black-green);
  background-image: url("https://assets-global.website-files.com/635ac9564cc3682ce1536786/638f45d98fe0830d8223e439_pattern%20(1)%20(1).png");
  background-position: 50%;
  background-size: cover;

  @media (max-width: 480px) {
    padding: 2.8125rem 1.5625rem;
  }
`;
const InnerContentContainer = styled.div`
  display: flex;
  gap: var(--twenty-pixel);
  padding: 0 var(--forty-pixel);
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 var(--twenty-pixel);
  }

  @media (max-width: 480px) {
    padding: 0 var(--ten-pixel);
    gap: var(--fifteen-pixel);
  }
`;
const FooterHeadingText = styled.p`
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 120%;
  color: #fff;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
export default HelpOffer;
