import React from 'react';
import App from 'next/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'isomorphic-unfetch';
import clientCredentials from '../credentials/client';
import Layout from '../Layout';

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const user =
      appContext.ctx.req && appContext.ctx.req.session
        ? appContext.ctx.req.session.decodedToken
        : null;

    const appProps = await App.getInitialProps(appContext);
    return { user, ...appProps };
  }

  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }

    // On change, handle login/logout and update to server
    firebase.auth().onAuthStateChanged(value => {
      if (value) {
        this.setState({ user: value });
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
      }
      this.setState({ user: null });
      // eslint-disable-next-line no-undef
      fetch('/api/logout', {
        method: 'POST',
        credentials: 'same-origin'
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component user={this.state.user} {...pageProps} />
      </Layout>
    );
  }
}
