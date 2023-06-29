import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FirstFooterColumn = ({ data }) => {
  return (
    <ColumnContainer>
      <LinkItem to={"#"}>
        <Logo src="https://assets-global.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg" />
      </LinkItem>
      <ColumnHeading>{data.heading}</ColumnHeading>
      {data.linkGroups.map((group) => {
        return (
          <LinkList>
            {group.map((item) => (
              <ListItem>
                <LinkItem to="#">{item}</LinkItem>
              </ListItem>
            ))}
          </LinkList>
        );
      })}
    </ColumnContainer>
  );
};

const ColumnContainer = styled.div`
  backdrop-filter: blur(5px);
`;
const ColumnHeading = styled.h6`
  margin-top: var(--fifty-pixel);
  font-size: 1rem;
  color: var(--black-green);
  line-height: 125%;
  font-weight: 500;
`;
const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  list-style-type: none;
  margin-top: 1rem;
`;
const ListItem = styled.li``;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--gray-green);
  font-size: 0.875rem;
  transition: 0.4s ease;

  &:hover {
    color: var(--green);
  }
`;

const Logo = styled.img`
  width: 130px;
`;
export default FirstFooterColumn;
