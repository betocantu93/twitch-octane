import DS from 'ember-data';
const { JSONAPISerializer } = DS;
import { underscore } from '@ember/string';
import { toJsonApiRelationship } from '../utils/json-api';

function videoToJsonApi({
  id,
  user_id,
  title,
  description,
  created_at,
  published_at,
  url,
  thumbnail_url,
  viewable,
  view_count,
  language,
  duration
}) {
  return {
    id,
    type: 'videos',
    attributes: {
      title,
      description,
      created_at,
      published_at,
      url,
      thumbnail_url,
      viewable,
      view_count,
      language,
      duration
    },
    relationships: {
      user: toJsonApiRelationship(user_id, 'users')
    }
  };
}

export default class VideoSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let { data } = payload;

    let newData = data.map(video => videoToJsonApi(video));

    newData = requestType === 'findRecord' ? newData.pop() : newData;

    payload.data = newData;

    return super.normalizeResponse(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
