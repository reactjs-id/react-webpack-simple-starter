import React from 'react';
import { render } from 'react-dom';

import Hello from 'components/hello';

const appContainer = document.getElementById('app');

render(<Hello />, appContainer);

if (DEBUG) {
  window.React = React;
}
