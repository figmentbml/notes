import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('titleCopy')

      var note = this.store.createRecord('note', { title: title, body: body });
      this.set('titleCopy', '');
      this.set('noteCopy', '');
      note.save();
    }
  }
});
