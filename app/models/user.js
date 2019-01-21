import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from '@ember-decorators/data';

export default class UserModel extends Model {

    @attr user_name;
    @attr broadcaster_type;
    @attr description;
    @attr display_name;
    @attr login;
    @attr offline_image_url;
    @attr profile_image_url;
    @attr view_count;


    @hasMany streams;

}
