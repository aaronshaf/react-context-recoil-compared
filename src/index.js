import React from 'react';
import ReactDOM from 'react-dom';
import ContextApp from './1-context-app/App';
import RecoilApp from './2-recoil-app/App';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>React Context vs. Recoil Rerenders</h1>
      <div>
        <em>Color updates represent rerenders</em>
      </div>

      <h2>React Context</h2>
      <ContextApp />

      <h2>Recoil</h2>
      <RecoilApp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
