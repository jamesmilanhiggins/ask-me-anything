import DS from 'ember-data';

export default DS.Model.extend({
  answercontent: DS.attr(),
  answerauthor: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
