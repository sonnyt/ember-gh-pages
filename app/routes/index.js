import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },
  actions: {
    update(task) {
      console.log(task);
      task.save();
    },

    remove() {

    },

    create(title) {
      const record = this.store.createRecord('task', { title });
      record.save();
    }
  }
});
