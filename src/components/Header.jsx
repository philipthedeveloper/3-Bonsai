import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navlinks, authlinks, bottomlinks } from "../constants/nav-data";

const Header = () => {
  const fixHeaderRef = useRef(null);
  const shadowDivRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 85) return;
      fixHeaderRef.current.style.boxShadow = `0px 0px 20px 7px rgba(0, 0, 0, ${
        (window.scrollY / 85) * 0.2
      })`;
      shadowDivRef.current.style.boxShadow = `0px 0px 20px 7px rgba(0, 0, 0, ${
        (window.scrollY / 85) * 0.4
      })`;
      console.log("Scrolling", window.scrollY);
    });
  }, []);
  return (
    <HeaderContainer>
      <ShadowDiv ref={shadowDivRef}></ShadowDiv>
      <FixHeader ref={fixHeaderRef}>
        <Navbar>
          <Logo src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg" />
          <NavLinkList className="navlinks">
            {navlinks.map((link) => {
              if (link.type === "drop-down")
                return (
                  <NavLinkItem key={link.name}>
                    <DropdownBtn>{link.name}</DropdownBtn>
                    <DropdownNav></DropdownNav>
                  </NavLinkItem>
                );

              if (link.type === "link")
                return (
                  <NavLinkItem key={link.name}>
                    <LinkItem to={link.to}>{link.name}</LinkItem>
                  </NavLinkItem>
                );

              if (link.type === "dual")
                return (
                  <NavLinkItem key={link.name}>
                    <LinkItem to={link.to}>{link.name}</LinkItem>
                    <DropdownNav></DropdownNav>
                  </NavLinkItem>
                );
            })}
          </NavLinkList>
          <AuthLinkList className="authlinks">
            {authlinks.map((link) =>
              link.type === "button" ? (
                <AuthLinkItem key={link.name}>
                  <LinkItem className="button-link" to={link.to}>
                    {link.name}
                  </LinkItem>
                </AuthLinkItem>
              ) : (
                <AuthLinkItem key={link.name}>
                  <LinkItem className="link" to={link.to}>
                    {link.name}
                  </LinkItem>
                </AuthLinkItem>
              )
            )}
          </AuthLinkList>
        </Navbar>{" "}
      </FixHeader>
      <BottomNavBar className="bottomlink">
        <BottomNavLinkList>
          {bottomlinks.map((link) => (
            <NavLinkItem key={link.name}>
              <LinkItem to={link.to}>{link.name}</LinkItem>
            </NavLinkItem>
          ))}
        </BottomNavLinkList>
      </BottomNavBar>
    </HeaderContainer>
  );
};

// styled components
const HeaderContainer = styled.header`
  // padding: 1.5rem 0;
  // padding-bottom: 0;
  width: 100%;
  background-color: var(--white);
  margin-top: 82px;
  position: relative;
`;

const FixHeader = styled.div`
  padding: 1.5rem 0;
  padding-bottom: 0;
  width: 100%;
  background-color: var(--white);
  z-index: 100;
  position: fixed;
  top: 0;
  transition: 0.5s ease;
`;

const ShadowDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  // box-shadow: 0px 0px 20px 7px rgba(0, 0, 0, 0.2);
  // background-color: red;
`;

const Logo = styled.img`
  width: 100px;
`;
const Navbar = styled.nav`
  width: 90%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    justify-content: space-between;

    .navlinks,
    .authlinks {
      display: none;
    }
  }
`;
const BottomNavBar = styled.nav`
  width: 90%;
  max-width: 1300px;
  margin: auto;
  padding: 1rem 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

const BottomNavLinkList = styled.ul`
  display: flex;
  gap: 1rem;

  li:last-child a {
    color: var(--green);
  }
`;
const NavLinkList = styled.ul`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;
const AuthLinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const NavLinkItem = styled.li``;
const AuthLinkItem = styled.li``;
const LinkItem = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: var(--gray);
  font-weight: 500;
  transition: 0.4s ease;

  &.button-link {
    padding: 0.7rem 1.5rem;
    background-color: var(--green);
    color: var(--white);
    transition: 0.4s ease;
    border-radius: 2rem;

    &:hover {
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
      color: var(--green);
      background-color: var(--white);
    }
  }

  &:hover {
    color: var(--bluish-green);
  }
`;
const DropdownBtn = styled.div`
  font-size: 1rem;
  color: var(--gray);
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    color: var(--bluish-green);
  }
`;
const DropdownNav = styled.nav``;

export default Header;
