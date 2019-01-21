import Component from '@ember/component';

export default class TwitchVideoComponent extends Component {
  didInsertElement() {
    super.didInsertElement(...arguments);

    if (this.video.id) {
      this._widget = new Twitch.Embed(this.element, {
        width: '100%',
        height: '100%',
        video: this.video.id
      });
    }
  }

  willDestroyElement() {
    super.willDestroyElement(...arguments);

    this._widget = null;
  }
}
