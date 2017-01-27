import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle(task) {
      task.toggleProperty('isDone');
      this.sendAction('updateAction', task);
    }
  }
});
