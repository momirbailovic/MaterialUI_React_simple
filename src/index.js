import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Prong from './root/prong'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Prong />, document.getElementById('root'));
serviceWorker.unregister();
