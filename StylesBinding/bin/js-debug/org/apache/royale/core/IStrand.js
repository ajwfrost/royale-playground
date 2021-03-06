/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\IStrand.as
 * org.apache.royale.core.IStrand
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IStrand');
/* Royale Dependency List: org.apache.royale.core.IBead*/




/**
 * @interface
 */
org.apache.royale.core.IStrand = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IStrand', org.apache.royale.core.IStrand);
/**
 *  Add a bead to the strand.
 *
 *  @asparam bead The bead to be added.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IBead} bead
 */
org.apache.royale.core.IStrand.prototype.addBead = function(bead) {
};
/**
 *  Find a bead on the strand.
 *
 *  @asparam classOrInterface The class or interface to use
 *                                to search for the bead
 *  @asreturn The bead.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} classOrInterface
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.IStrand.prototype.getBeadByType = function(classOrInterface) {
};
/**
 *  Remove a bead from the strand.
 *
 *  @asparam IBead bead The bead to be removed.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IBead} bead
 * @return {org.apache.royale.core.IBead}
 */
org.apache.royale.core.IStrand.prototype.removeBead = function(bead) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IStrand.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IStrand', qName: 'org.apache.royale.core.IStrand', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IStrand.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.IStrand', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }},
        'getBeadByType': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.IStrand', parameters: function () { return [  { index: 1, type: 'Class', optional: false } ]; }},
        'removeBead': { type: 'org.apache.royale.core.IBead', declaredBy: 'org.apache.royale.core.IStrand', parameters: function () { return [  { index: 1, type: 'org.apache.royale.core.IBead', optional: false } ]; }}
      };
    }
  };
};
