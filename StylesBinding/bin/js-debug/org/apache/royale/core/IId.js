/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IId.as
 * org.apache.royale.core.IId
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IId');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IId = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IId', org.apache.royale.core.IId);
/**  * @type {string}
 */org.apache.royale.core.IId.prototype.id;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IId.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IId', qName: 'org.apache.royale.core.IId', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IId.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IId'}
      };
    },
    methods: function () {return {};}
  };
};
