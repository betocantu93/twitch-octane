import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class UsersRoute extends Route {

    model({user_id}){
        return hash({
            user: this.store.findRecord('user', user_id),
            videos: this.store.query('video', {
                user_id
            })
        })
    }
}
