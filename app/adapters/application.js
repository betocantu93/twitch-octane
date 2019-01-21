import DS from 'ember-data';
const { JSONAPIAdapter } = DS;
import { computed } from '@ember-decorators/object';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(AdapterFetch) {
  host = 'https://api.twitch.tv';
  namespace = 'helix';

  @computed()
  get headers() {
    return {
      'Client-ID': 'rcig593zataeckddxk9xp9xt6v5eyg'
    };
  }

}
