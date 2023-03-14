import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FirebaseContext} from "./store/firebaseContext"
import firebase from './firebase/config'

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </FirebaseContext.Provider>
, document.getElementById('root'));