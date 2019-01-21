import Route from '@ember/routing/route';
import { inject as service } from '@ember-decorators/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    this.store.findAll('game');
    return this.store.peekAll('game');
  }

 
}
