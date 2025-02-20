import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
  z-index: 100;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.text};
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLink href="#home">SK</NavLink>
        <NavLinks>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#certifications">Certifications</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 