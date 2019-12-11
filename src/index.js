import React from 'react';
import ReactDOM from 'react-dom';

// JSON //////////////////
import data from './testData';

// Components //////////////////
import App from './components/App.js';

ReactDOM.render(
  <App contests={data.contests} />,
  document.getElementById('root')
);