import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style/index.scss';
import './utils'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

// 性能分析控件
// import reportWebVitals from './performance/reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
