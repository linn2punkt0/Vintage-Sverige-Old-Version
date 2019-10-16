import React, { Component } from 'react';
import App from 'next/app';
import Layout from '../Layout';

export default class MyApp extends App {
  static async getInitialProps(ctx) {
    const user =
      ctx.req && ctx.req.session ? ctx.req.session.decodedToken : null;
    const appProps = await App.getInitialProps(ctx);
    return { user, ...appProps };
  }

  render() {
    const { Component, pageProps, user } = this.props;
    return (
      <Layout>
        <Component user={user} {...pageProps} />
      </Layout>
    );
  }
}
