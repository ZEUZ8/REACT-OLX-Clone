import React, { useState ,useContext} from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import './Signup.css';
import { useHistory } from "react-router-dom"

export default function Signup() {
  const history = useHistory()
  const [userName,setUserName] = useState('')
  const [userEmail,setUserEmail] = useState('')
  const [userPhone,setUserPhone] = useState('')
  const [userPassword,setUserPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

 const handleSubmit = (event)=>{
  event.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword).then((result)=>{
    result.user.updateProfile({displayName:userName}).then(()=>{
      firebase.fireStore().collection("users").add({
        id:result.user.uid,
        userName:userName,
        userphone:userPhone
      }).then(()=>{
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
            id="fname"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={userPhone}
            onChange={(event) => setUserPhone(event.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
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
