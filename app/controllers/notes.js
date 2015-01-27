import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('titleCopy');

      if ((body == null) || (title == null)) {

      } else {
        var note = this.store.createRecord('note', { title: title, body: body });
        this.set('titleCopy', '');
        this.set('noteCopy', '');
        note.save();
      }
    },

    deleteNote: function(id) {
      var note = this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    }
  }
});
