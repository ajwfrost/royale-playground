/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\ValuesManager.as
 * org.apache.royale.core.ValuesManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ValuesManager');
/* Royale Dependency List: org.apache.royale.core.IValuesImpl*/




/**
 *  Constructor.  This class should not be instantiated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 */
org.apache.royale.core.ValuesManager = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.ValuesManager', org.apache.royale.core.ValuesManager);


/**
 * @private
 * @type {org.apache.royale.core.IValuesImpl}
 */
org.apache.royale.core.ValuesManager._valuesImpl;


org.apache.royale.core.ValuesManager.get__valuesImpl = function() {
  return org.apache.royale.core.ValuesManager._valuesImpl;
};


org.apache.royale.core.ValuesManager.set__valuesImpl = function(value) {
  org.apache.royale.core.ValuesManager._valuesImpl = value;
};


Object.defineProperties(org.apache.royale.core.ValuesManager, /** @lends {org.apache.royale.core.ValuesManager} */ {
/**
  * @export
  * @type {org.apache.royale.core.IValuesImpl} */
valuesImpl: {
get: org.apache.royale.core.ValuesManager.get__valuesImpl,
set: org.apache.royale.core.ValuesManager.set__valuesImpl}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ValuesManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ValuesManager', qName: 'org.apache.royale.core.ValuesManager', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ValuesManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        '|valuesImpl': { type: 'org.apache.royale.core.IValuesImpl', access: 'readwrite', declaredBy: 'org.apache.royale.core.ValuesManager'}
      };
    },
    methods: function () {
      return {
        'ValuesManager': { type: '', declaredBy: 'org.apache.royale.core.ValuesManager'}
      };
    }
  };
};
