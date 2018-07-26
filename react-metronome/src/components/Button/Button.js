import React from 'react';
import PropTypes from 'prop-types';
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
  isPlaying: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
