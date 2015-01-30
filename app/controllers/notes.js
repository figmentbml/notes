import Ember from "ember";

export default Ember.ArrayController.extend({

  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('titleCopy');

      if ((body == null) || (title == null)) {
        this.flashMessage('fail', 'You cannot have an empty title or body.');
      } else {
        var note = this.store.createRecord('note', { title: title, body: body });
        this.set('titleCopy', '');
        this.set('noteCopy', '');
        note.save().then(function(){
          this.flashMessage('success', 'Your note has been created!');
        }.bind(this));
      }
    },

    deleteNote: function(note) {
        note.deleteRecord();
        note.save();
        this.flashMessage('success', 'Your note has been deleted!');
    },

    updateNote: function(id, content) {
      this.store.find('note', id).then(function(note) {
        note.updateRecord(content);
        note.save();
      });
    },

    editNote: function() {
      this.get('model').set('isEditing', true);
      console.log('hit editNote');
    },
  },
  isEditing: false,

});
