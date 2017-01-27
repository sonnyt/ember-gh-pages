import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  isError: false,

  actions: {
    save() {
      const title = this.get('title');

      if (!title) {
        this.set('isError', true);
        return;
      } else {
        this.setProperties({ isError: false, isLoading: true });
        this.sendAction('action', title);
        this.set('title', null);
      }
    }
  }
});
