import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterColumn = ({ data }) => {
  return (
    <ColumnContainer>
      <ColumnHeading>{data.heading}</ColumnHeading>
      {data.linkGroups.map((group) => {
        return (
          <LinkList>
            {group.map((item) => {
              if (item.startsWith("dropdown-"))
                return (
                  <ListItem>
                    <LinkItem to="#">
                      {item.slice(9)}

                      <i class="fi fi-rr-caret-down"></i>
                    </LinkItem>
                  </ListItem>
                );

              return (
                <ListItem>
                  <LinkItem to="#">{item}</LinkItem>
                </ListItem>
              );
            })}
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
  font-size: 1rem;
  color: var(--black-green);
  line-height: 125%;
  font-weight: 500;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  list-style-type: none;
  margin-top: 1rem;
`;

const ListItem = styled.li``;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--gray-green);
  font-size: 0.875rem;
  transition: 0.4s ease;
  display: flex;
  justify-content: space-between;

  i {
    color: var(--green);
  }

  &:hover {
    color: var(--green);
  }
`;
export default FooterColumn;
