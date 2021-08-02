import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import { AuthContext,firebaseContext } from './store/Firebasecontext';
import { PostContext } from './store/PostContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext'

function App() {
  const {user,setUser}=useContext(AuthContext)
  const {firebase}=useContext(firebaseContext)
  useEffect(() => {
    console.log('gdgdgdg')
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
     
    })

  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
       <Route path='/create'>
         <Create></Create>
       </Route>
       <Route path='/view'>
       <ViewPost></ViewPost>
       </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
