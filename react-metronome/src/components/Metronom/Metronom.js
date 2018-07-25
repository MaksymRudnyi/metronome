import React, {Component} from 'react';
import './Metronom.css';
import Slider from '../Slider/Slider';
import Button from '../Button/Button';
import Header from '../Header/Header';

import click1 from '../../media/click1.wav';
import click2 from '../../media/click2.wav';

class Metronom extends Component {
	constructor (props) {
		super(props);

		this.state = {
			playing: false,
			count: 0,
			bpm: 100,
			beatsPerMeasure: 4
		};

		this.click1 = new Audio(click1);
		this.click2 = new Audio(click2);
	}

	handleBpmChange = event => {
		const bpm = event.target.value;

		if (this.state.playing) {
			clearInterval(this.timer);
			this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

			this.setState({
				count: 0,
				bpm
			});
		} else {
			this.setState({bpm});
		}
	};

	startStop = () => {
		if (this.state.playing) {
			clearInterval(this.timer);
			this.setState({
				playing: false
			});
		} else {
			this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
			this.setState({
				count: 0,
				playing: true
			}, this.playClick);
		}
	};

	playClick = () => {
		const {count, beatsPerMeasure} = this.state;

		if (count % beatsPerMeasure === 0) {
			this.click2.play();
		} else {
			this.click1.play();
		}

		this.setState(state => ({
			count: (state.count + 1) % state.beatsPerMeasure
		}));
	};

	render () {
		const {playing, bpm} = this.state;

		return (
			<div className="metronome">
				<div>
					<Header bpm={bpm} isPlaying={playing}/>
					<Slider handleChange={this.handleBpmChange} currentBpm={bpm}/>
				</div>
				<Button isPlaying={playing} handleClick={this.startStop}/>
			</div>
		);
	}
}

export default Metronom;