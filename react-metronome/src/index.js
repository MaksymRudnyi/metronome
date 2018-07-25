import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Metronome/>, document.getElementById('root'));
registerServiceWorker();