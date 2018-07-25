import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Metronom from './metronome/Metronome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Metronom />, document.getElementById('root'));
registerServiceWorker();
