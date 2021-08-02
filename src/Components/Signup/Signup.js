import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/Firebasecontext';
import './Signup.css';
import { useHistory } from 'react-router-dom';
export default function Signup() {
  const [username,setUsername]= useState('');
  const [userEmail,setEmail]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory()
  const {firebase} = useContext(firebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(userEmail,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({id:result.user.uid,
        username:username,
      phone:phonenumber}).then(()=>{
        history.push("/login")
      })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={userEmail}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
