import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// Failed to compile
// ./src/index.js
//   Line 7:  'Router' is not defined  react/jsx-no-undef

// Search for the keywords to learn more about each error.
ReactDOM.render(<Router>
    <Route path="/:resistance?" component={App}/>
</Router>, document.getElementById('root'));
registerServiceWorker();
