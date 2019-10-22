const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'Event', page: 'events', pattern: '/event-och-massor' })
  .add({ name: 'About', page: 'about', pattern: '/om-vintage-sverige' })
  .add({
    name: 'Material',
    page: 'materials',
    pattern: '/material-och-tvattrad'
  })
  .add({ name: 'School', page: 'vintageSchool', pattern: '/vintageskola' })
  .add({ name: 'Wiki', page: 'vintageWiki', pattern: '/vintage-wiki' })
  .add({ name: 'Login', page: 'logIn', pattern: '/logga-in' })
  .add({ name: 'Register', page: 'newUser', pattern: '/registrera-dig' });
