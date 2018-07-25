import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({currentBpm = 100, handleChange}) => {
	return (
		<input
			type="range"
			min={60}
			max={240}
			value={currentBpm}
			onChange={(event) => handleChange(event)}
		/>
	)
};

Slider.propTypes = {
	currentBpm: PropTypes.number,
	handleChange: PropTypes.func.isRequired
};

export default Slider;