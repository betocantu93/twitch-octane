import ApplicationAdapter from './application';

export default class GameAdapter extends ApplicationAdapter {
  urlForFindAll(modelName, snapshot) {
    return `${this.host}/${this.namespace}/games/top`;
  }
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/games?id=${id}`;
  }
}
