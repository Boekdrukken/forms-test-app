import EmberRouter from '@ember/routing/router';
import config from 'forms/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {

  this.route('forms', function () {
    this.route('new', { path: ':type' }, function () {});
  });

});
