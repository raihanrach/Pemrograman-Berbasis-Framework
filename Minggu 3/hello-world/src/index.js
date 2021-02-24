import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceworkers'; 
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
import List from './List'
import Footer from './Footer';
import Tes from './Test';
import LoginComponent from './component/LoginComponent';

ReactDOM.render(<LoginComponent />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


