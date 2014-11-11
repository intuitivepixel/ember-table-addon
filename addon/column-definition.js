import Ember from 'ember';

var ColumnDefinition = Ember.Object.extend({

  /*
   * ---------------------------------------------------------------------------
   * API - Inputs
   * ---------------------------------------------------------------------------
   */

  /*
  Name of the column, to be displayed in the header.
  TODO(new-api): Change to `columnName`
   */
  headerCellName: null,

  /*
  Path of the content for this cell. If the row object is a hash of keys
  and values to specify data for each column, `contentPath` corresponds to
  the key.
   */
  contentPath: null,

  /*
  Minimum column width. Affects both manual resizing and automatic resizing
  (in `forceFillColumns` mode).
   */
  minWidth: null,

  /*
  Maximum column width. Affects both manual resizing and automatic resizing
  (in `forceFillColumns` mode).
   */
  maxWidth: null,

  /*
  Default column width. Specifies the initial width of the column; if the
  column is later resized automatically, it will be proportional to this.
   */
  defaultColumnWidth: 150,

  /* Whether the column can be manually resized. */
  isResizable: true,

  /*
  Whether the column can be rearranged with other columns. Only matters if
  the table's `enableColumnReorder` property is set to true (the default).
  TODO(new-api): Rename to `isReorderable`
   */
  isSortable: true,

  /*
  Alignment of the text in the cell. Possible values are "left", "center",
  and "right".
   */
  textAlign: 'text-align-right',

  /*
  Whether the column can automatically resize to fill space in the table.
  Only matters if the table is in `forceFillColumns` mode.
   */
  canAutoResize: true,

  /*
  TODO(new-api): Remove `headerCellViewClass`
  Override to specify a custom view to use for the header cell.
   */
  headerCellView: 'header-cell',
  headerCellViewClass: Ember.computed.alias('headerCellView'),

  /*
  TODO(new-api): Remove `tableCellViewClass`
  Override to specify a custom view to use for table cells.
   */
  tableCellView: 'table-cell',
  tableCellViewClass: Ember.computed.alias('tableCellView'),

  /*
  Override to customize how the column gets data from each row object.
  Given a row, should return a formatted cell value, e.g. $20,000,000.
   */
  getCellContent: function(row) {
    var path;
    path = this.get('contentPath');
    Ember.assert("You must either provide a contentPath or override " + "getCellContent in your column definition", path != null);
    return Ember.get(row, path);
  },

  /*
  Override to maintain a consistent path to update cell values.
  Recommended to make this a function which takes (row, value) and updates
  the row value.
   */
  setCellContent: Ember.K,

  /*
   * ---------------------------------------------------------------------------
   * Internal properties
   * ---------------------------------------------------------------------------
   */

  /*
  Internal: width of the column.
  TODO: Rename to `width`
   */
  columnWidth: Ember.computed.oneWay('defaultColumnWidth'),
  resize: function(width) {
    return this.set('columnWidth', width);
  }
});

export default ColumnDefinition;