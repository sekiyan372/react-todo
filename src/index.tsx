import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Firebase JS SDK全体の読み込み
import firebase from 'firebase';
// 本番環境では個々でSDKを読み込む
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

import firebaseConfig from './components/firebase'

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
