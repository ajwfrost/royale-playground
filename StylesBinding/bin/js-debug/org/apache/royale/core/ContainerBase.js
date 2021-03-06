/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ContainerBase.as
 * org.apache.royale.core.ContainerBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ContainerBase');
/* Royale Dependency List: org.apache.royale.core.ContainerBaseStrandChildren,org.apache.royale.core.IChild,org.apache.royale.core.IParent*/

goog.require('org.apache.royale.core.GroupBase');
goog.require('org.apache.royale.core.IContainerBaseStrandChildrenHost');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.GroupBase}
 * @implements {org.apache.royale.core.IContainerBaseStrandChildrenHost}
 */
org.apache.royale.core.ContainerBase = function() {
  org.apache.royale.core.ContainerBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.ContainerBase, org.apache.royale.core.GroupBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ContainerBase', org.apache.royale.core.ContainerBase);


/**
 * @private
 * @type {org.apache.royale.core.ContainerBaseStrandChildren}
 */
org.apache.royale.core.ContainerBase.prototype._strandChildren;


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBase.prototype.$addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.ContainerBase.superClass_.addElement.apply(this, [ c, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBase.prototype.$addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.ContainerBase.superClass_.addElementAt.apply(this, [ c, index, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.ContainerBase.prototype.$removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.royale.core.ContainerBase.superClass_.removeElement.apply(this, [ c, dispatchEvent] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.ContainerBase.prototype.$getElementIndex = function(c) {
  return org.apache.royale.core.ContainerBase.superClass_.getElementIndex.apply(this, [ c] );
};


/**
 * @asprivate
 * @suppress {undefinedNames}
 * Support strandChildren.
 * @export
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.ContainerBase.prototype.$getElementAt = function(index) {
  return org.apache.royale.core.ContainerBase.superClass_.getElementAt.apply(this, [ index] );
};


org.apache.royale.core.ContainerBase.prototype.get__strandChildren = function() {
  if (this._strandChildren == null) {
    this._strandChildren = new org.apache.royale.core.ContainerBaseStrandChildren(this);
  }
  return this._strandChildren;
};


org.apache.royale.core.ContainerBase.prototype.get__$numElements = function() {
  return org.apache.royale.core.ContainerBase.superClass_.get__numElements.apply(this);
};


Object.defineProperties(org.apache.royale.core.ContainerBase.prototype, /** @lends {org.apache.royale.core.ContainerBase.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IParent} */
strandChildren: {
get: org.apache.royale.core.ContainerBase.prototype.get__strandChildren},
/**
  * @export
  * @type {number} */
$numElements: {
get: org.apache.royale.core.ContainerBase.prototype.get__$numElements}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ContainerBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ContainerBase', qName: 'org.apache.royale.core.ContainerBase', kind: 'class' }], interfaces: [org.apache.royale.core.IContainerBaseStrandChildrenHost] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ContainerBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strandChildren': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'org.apache.royale.core.ContainerBase'},
        '$numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.ContainerBase'}
      };
    },
    methods: function () {
      return {
        'ContainerBase': { type: '', declaredBy: 'org.apache.royale.core.ContainerBase'},
        '$addElement': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '$removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.ContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.ContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false } ]; }},
        '$getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.ContainerBase', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};
