import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import io from 'socket.io-client';
import './bootstrap.min.css';
import './index.css';

const socket = io('http://localhost:3001');
/*
socket.on('selectionPriceUpdate', (data) =>
  console.log('selectionPriceUpdate', data)
  //{newPrice: 6, id: 1111}
);

socket.on('eventStateUpdate', (data) => console.log('eventStateUpdate', data));
//{active: true, id: 331}
*/
socket.on('SelectionStateUpdate', (data) =>
  console.log('selectionStateUpdate', data)
);
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
