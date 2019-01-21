import DS from 'ember-data';
const { JSONAPISerializer } = DS;
import { underscore } from '@ember/string';

function toJsonApi({ id, name, box_art_url, type = 'games' }) {
    return {
      id,
      type,
      attributes: {
        name,
        box_art_url
      }
    };
  }

export default class GameSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let { data } = payload;

    let newData = data.map( game => toJsonApi(game)) ;

    newData = requestType === "findRecord" ? newData.pop() : newData;

    payload.data = newData;

    return super.normalizeResponse(...arguments);
  }
  

  keyForAttribute(attr) {
    return underscore(attr);
  }
}
