import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(EmberValidations.Mixin, {
});

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      
      var body = this.get('noteCopy');
      var title = this.get('titleCopy');

      var note = this.store.createRecord('note', { title: title, body: body });
      this.set('titleCopy', '');
      this.set('noteCopy', '');
      note.save();
    },

    deleteNote: function() {
      var note = this.store.find('note', this.get('id'));
      note.deleteRecord();
      note.save();
    }
  }
});
