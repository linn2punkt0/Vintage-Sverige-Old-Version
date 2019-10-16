import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'isomorphic-unfetch';
// import { firebaseConfig as clientCredentials } from '../firebase';
import clientCredentials from '../credentials/client';

const Index = props => {
  const [user, setUser] = useState(null);

  const componentDidMount = () => {
    firebase.initializeApp(clientCredentials);

    // On change, handle login/logout and update to server
    firebase.auth().onAuthStateChanged(value => {
      if (value) {
        setUser(value);
        return value.getIdToken().then(token => {
          // eslint-disable-next-line no-undef
          return fetch('/api/login', {
            method: 'POST',
            // eslint-disable-next-line no-undef
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ token })
          });
        });
      } else {
        setUser(null);
        // eslint-disable-next-line no-undef
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin'
        });
      }
    });
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        process.env.user_email,
        process.env.user_password
      );
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    componentDidMount();
  }, []);

  console.log(user);

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {user && <h2>You are logged in</h2>}
    </div>
  );
};

export default Index;
