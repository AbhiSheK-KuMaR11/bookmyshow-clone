import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
// import reportWebVitals from './reportWebVitals';
import Context from './component/Header/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
    <App />
    </Context>
 
);


