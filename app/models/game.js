import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';

export default class GameModel extends Model {
    @attr name;
    @attr box_art_url;

    @computed('box_art_url')
    get thumbnail(){
        return this.box_art_url.replace('{width}', 300).replace('{height}', 300);
    }
}
