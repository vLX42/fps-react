import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FPSStats } from '../src/FPSStats';

const App = () => {
  return (
    <div>
      <FPSStats />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
