import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/popper.js/dist/esm/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import './bootstrap.scss';
import './style.styl';

import React from 'react';
import ReactDOM from 'react-dom';

import Application from './application';

ReactDOM.render(<Application />, document.getElementById('app'));