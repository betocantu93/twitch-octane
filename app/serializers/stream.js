import DS from 'ember-data';
const { JSONAPISerializer } = DS;
import { underscore } from '@ember/string';
import { toJsonApiRelationship } from '../utils/json-api';

function streamToJsonApi({
  id,
  title,
  viewer_count,
  started_at,
  thumbnail_url,
  language,
  user_id,
  game_id,
}) {
  return {
    id,
    type: "streams",
    attributes: {
      title,
      viewer_count,
      started_at,
      thumbnail_url,
      language
    },
    relationships: {
      user: toJsonApiRelationship(user_id, 'users'),
      game: toJsonApiRelationship(game_id, 'games')
    }
  };
}


export default class StreamSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let { data } = payload;

    let newData = data.map(stream => streamToJsonApi(stream));

    newData = requestType === 'findRecord' ? newData.pop() : newData;

    payload.data = newData;

    return super.normalizeResponse(...arguments);
  }

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
