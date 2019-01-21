import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';

export default class VideoModel extends Model {

  @attr title;
  @attr description;
  @attr created_at;
  @attr published_at;
  @attr url;
  @attr thumbnail_url;
  @attr viewable;
  @attr view_count;
  @attr language;
  @attr duration;

  @belongsTo user;

  @computed('thumbnail_url')
  get thumbnail(){
      return this.thumbnail_url.replace('{width}', 300).replace('{height}', 300);
  }

}
