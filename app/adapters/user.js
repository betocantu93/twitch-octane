import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/users?id=${id}`;
  }
}
