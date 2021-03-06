import DS from 'ember-data';

export default DS.Model.extend({
    headline: DS.attr(),
    image: DS.attr(),
    content: DS.attr(),
    author: DS.attr(),
    date: DS.attr()
});
