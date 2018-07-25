import React from 'react';
import PropTypes from 'prop-types';

const Header = ({bpm, isPlaying}) => {
	return (
		<div>
			{isPlaying ? 'Playing at: ' : ' '}
			{bpm} BPM
		</div>
	)
};

Header.propTypes = {
	bpm: PropTypes.number.isRequired,
	isPlaying: PropTypes.bool
};

export default Header