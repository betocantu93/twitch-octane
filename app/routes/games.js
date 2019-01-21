import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class GamesRoute extends Route {
    model({game_id}){
        return hash({
            game: this.store.findRecord('game', game_id),
            streams: this.store.query('stream', {
                game_id
            })
        })
    }
}

