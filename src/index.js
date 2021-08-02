import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {firebaseContext} from './store/Firebasecontext'
import Context from './store/Firebasecontext';
import firebase from './firebase/config'

ReactDOM.render(<firebaseContext.Provider value={{firebase}}>
   <Context>
   <App />   
   </Context>
   
   
    
    </firebaseContext.Provider>, document.getElementById('root'));
