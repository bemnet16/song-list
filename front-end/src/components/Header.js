import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: #2c7da0;
  color: white;
  padding: 20px 0;
  margin-bottom: 40px;
  text-align: center;
  // display: flex;
  // justify-content: space-around;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 20px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #00ceff;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff; /* Change link color on hover */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Song List</h1>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/create">Create Songs</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </NavItem>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
