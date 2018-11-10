/**
 * Generated by Apache Royale Compiler from org\apache\royale\html\beads\ContainerView.as
 * org.apache.royale.html.beads.ContainerView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ContainerView');
/* Royale Dependency List: org.apache.royale.core.IContainer,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.IViewport,org.apache.royale.utils.loadBeadFromValuesManager*/

goog.require('org.apache.royale.html.beads.GroupView');



/**
 * @constructor
 * @extends {org.apache.royale.html.beads.GroupView}
 */
org.apache.royale.html.beads.ContainerView = function() {
  org.apache.royale.html.beads.ContainerView.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ContainerView, org.apache.royale.html.beads.GroupView);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.html.beads.ContainerView', org.apache.royale.html.beads.ContainerView);


/**
 * @private
 * @type {org.apache.royale.core.IViewport}
 */
org.apache.royale.html.beads.ContainerView.prototype._viewport;


org.apache.royale.html.beads.ContainerView.prototype.get__viewport = function() {
  return this._viewport;
};


org.apache.royale.html.beads.ContainerView.prototype.get__contentView = function() {
  if (this.viewport != null) {
    return this.viewport.contentView;
  } else {
    return this.host;
  }
};


org.apache.royale.html.beads.ContainerView.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.royale.html.beads.ContainerView.superClass_.set__strand.apply(this, [ value] );
  if (!this._viewport)
    this._viewport = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IViewport, "iViewport", this._strand);
  if (this._viewport) {
    var /** @type {org.apache.royale.core.IContainer} */ chost = this.host;
    if (chost != null && chost != this._viewport.contentView) {
      chost.addElement(this._viewport.contentView);
    }
  }
};


Object.defineProperties(org.apache.royale.html.beads.ContainerView.prototype, /** @lends {org.apache.royale.html.beads.ContainerView.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IViewport} */
viewport: {
get: org.apache.royale.html.beads.ContainerView.prototype.get__viewport},
/**
  * @export
  * @type {org.apache.royale.core.ILayoutView} */
contentView: {
get: org.apache.royale.html.beads.ContainerView.prototype.get__contentView},
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.html.beads.ContainerView.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ContainerView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContainerView', qName: 'org.apache.royale.html.beads.ContainerView', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ContainerView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.royale.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.royale.html.beads.ContainerView'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.ContainerView'}
      };
    },
    methods: function () {return {};}
  };
};
