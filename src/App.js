import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import store from './redux/store';
import SportCategory from './components/SportCategory';

function App() {
  useEffect(() => {
    // Init Materialize js
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <SportCategory />
      </div>
    </Provider>
  );
}

export default App;
