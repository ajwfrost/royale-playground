/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IContainerBaseStrandChildrenHost.as
 * org.apache.royale.core.IContainerBaseStrandChildrenHost
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IContainerBaseStrandChildrenHost');
/* Royale Dependency List: org.apache.royale.core.IChild*/




/**
 * @interface
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IContainerBaseStrandChildrenHost', org.apache.royale.core.IContainerBaseStrandChildrenHost);
/**  * @type {number}
 */org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$numElements;
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$addElement = function(c, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$addElementAt = function(c, index, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$removeElement = function(c, dispatchEvent) {
};
/**
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$getElementIndex = function(c) {
};
/**
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.$getElementAt = function(index) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IContainerBaseStrandChildrenHost', qName: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IContainerBaseStrandChildrenHost.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '$numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost'}
      };
    },
    methods: function () {
      return {
        '$addElement': { type: 'void', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '$removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IChild', optional: false } ]; }},
        '$getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.IContainerBaseStrandChildrenHost', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    }
  };
};
