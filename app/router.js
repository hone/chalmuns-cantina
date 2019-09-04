import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('characters', function() {
    this.route('show', { path: '/:character_slug' });
  });
});

export default Router;
