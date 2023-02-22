import React, { useState } from 'react'
import './Login.css';
import LinkedIn from './images/LinkedIn_Logo.svg.png';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.photoURL,
        })
      )
    }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(
          login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic
        })
      );
    });
  }).catch(error => (error));
};


  return (
    <div className="login">
      <img src={LinkedIn} alt="LinkedIn Logo" />

      <form>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder='Full name required (if registering)' 
          type='text'>
        </input>

        <input 
          value={profilePic} 
          onChange={e => setProfilePic(e.target.value)} 
          placeholder='Profile pic url (optional)' 
          type='text'>
        </input>

        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder='Email' 
          type='email'>
        </input>

        <input 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder='Password' 
          type='password'>
        </input>

        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{' '}
        <span className="login_register" onClick={register}>Register now</span>
      </p>
    </div>
  )
}

export default Login;
