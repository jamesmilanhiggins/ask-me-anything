import Ember from 'ember';

var questions = [{
  content: "test question",
  author: "James Higgins",
  notes: "test notes"
}, {
  content: "2test question",
  author: "2James Higgins",
  notes: "2test notes"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
