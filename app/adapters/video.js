import ApplicationAdapter from './application';

export default class VideoAdapter extends ApplicationAdapter {
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${this.namespace}/videos?id=${id}`;
  }
}
