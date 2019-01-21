import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', {path: 'games/:game_id'});
  this.route('videos', {path: 'videos/:video_id'});
  this.route('users', {path: 'users/:user_id'});
});

export default Router;
