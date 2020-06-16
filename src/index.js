import React from 'react';
import ReactDOM from 'react-dom';
import ContextApp from './1-context-app/App';
import RecoilApp from './2-recoil-app/App';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div style={{ float: 'right' }}>
        <a href="https://github.com/aaronshaf/react-context-recoil-compared">
          GitHub
        </a>
      </div>
      <h1>React Context vs. Recoil Rerenders</h1>
      <div>Color updates represent rerenders. Touch or hover over cells.</div>

      <h2>React Context</h2>
      <ContextApp />

      <h2>Recoil</h2>
      <RecoilApp />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
