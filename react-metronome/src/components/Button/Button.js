import React from 'react';
import PropTyps from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #c94d46;
  padding: 10px;
  border: 1px solid #832420;
  border-radius: 2px;
  width: 100px;
  color: #fff;
  font-size: 18px;

  &:focus {
    outline: 0;
  }
`;

const Button = ({ isPlaying, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      {isPlaying ? 'Stop' : 'Start'}
    </StyledButton>
  );
};

Button.propTypes = {
  something: PropTyps.number,
  isPlaying: PropTyps.bool.isRequired,
  handleClick: PropTyps.func.isRequired
};

export default Button;
