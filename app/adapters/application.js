import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  host: 'http://notes-api-j.herokuapp.com/'
});
