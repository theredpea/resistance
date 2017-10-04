import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App color1="red" color2="blue" color3="yellow" color4="orange" />, document.getElementById('root'));
registerServiceWorker();
