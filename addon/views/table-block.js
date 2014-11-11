import Ember from 'ember';
import StyleBindingsMixin from '../mixins/style-bindings-mixin';

/* TODO: This should be a mixin */
var TableBlock;

TableBlock = Ember.CollectionView.extend(StyleBindingsMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('controller.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,
  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),
  height: Ember.computed(function() {
    return this.get('controller._headerHeight');
  }).property('controller._headerHeight')
});

export default TableBlock;