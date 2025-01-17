import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* later added */
//import { ThemeProvider } from "@aws-amplify/ui-react";
import { ThemeProvider, defaultTheme } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);


/* later added */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider theme={defaultTheme}>
  <App />
</ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
