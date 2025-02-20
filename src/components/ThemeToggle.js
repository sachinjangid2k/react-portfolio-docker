import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 100;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </ToggleButton>
  );
};

export default ThemeToggle; 