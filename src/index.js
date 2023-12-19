import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyASdubHUNFSYoC8m0NjkUlGkiRbs-XADNQ",
  authDomain: "costs-50ef8.firebaseapp.com",
  projectId: "costs-50ef8",
  storageBucket: "costs-50ef8.appspot.com",
  messagingSenderId: "960681355801",
  appId: "1:960681355801:web:b2aca92b9ccfa1e9001888",
  measurementId: "G-G9TSNGP0LL"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
