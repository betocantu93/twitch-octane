import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';

export default class StreamModel extends Model {

  @attr title;
  @attr viewer_count;
  @attr started_at;
  @attr thumbnail_url;
  @attr language;


  @belongsTo user;
  @belongsTo game;

  @computed('thumbnail_url')
  get thumbnail(){
      return this.thumbnail_url.replace('{width}', 300).replace('{height}', 300);
  }

}
