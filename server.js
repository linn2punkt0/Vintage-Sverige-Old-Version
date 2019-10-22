const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const next = require('next');
const admin = require('firebase-admin');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const routes = require('./routes');
// const handler = routes.getRequestHandler(app);

const firebase = admin.initializeApp(
  {
    // credential: admin.credential.cert(require('./credentials/server'))
    credential: admin.credential.cert([
      process.env.type,
      process.env.project_id,
      process.env.private_key_id,
      process.env.private_key,
      process.env.client_email,
      process.env.client_id,
      process.env.auth_uri,
      process.env.token_uri,
      process.env.auth_provider_x509_cert_url,
      process.env.client_x509_cert_url
    ])
  },
  'server'
);

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({ secret: 'geheimnis' }),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 } // week
    })
  );

  server.use((req, res, next) => {
    req.firebaseServer = firebase;
    next();
  });

  server.post('/api/login', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const token = req.body.token;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(decodedToken => {
        req.session.decodedToken = decodedToken;
        return decodedToken;
      })
      .then(decodedToken => res.json({ status: true, decodedToken }))
      .catch(error => res.json({ error }));
  });

  server.post('/api/logout', (req, res) => {
    req.session.decodedToken = null;
    res.json({ status: true });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // server.use(handler).listen(port, err => {
  //   if (err) throw err;
  //   console.log(`> Ready on http://localhost:${port}`);
  // });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
