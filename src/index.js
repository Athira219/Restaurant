import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min .css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import restStore from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <Provider store={restStore}>
      <BrowserRouter >
      <App />
      </BrowserRouter>
      </Provider>
    
   
  </React.StrictMode>
);


