import React from 'react';
import PropTyps from 'prop-types';

const Button = ({isPlaying, handleClick}) => {
	return (
		<button onClick={handleClick}>
			{isPlaying ? 'Stop' : 'Start'}
		</button>
	);
};

Button.propTypes = {
	isPlaying: PropTyps.bool.isRequired,
	handleClick: PropTyps.func.isRequired
};

export default Button;