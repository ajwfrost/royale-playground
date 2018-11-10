/**
 * Generated by Apache Royale Compiler from org\apache\royale\utils\StringPadder.as
 * org.apache.royale.utils.StringPadder
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.StringPadder');
/* Royale Dependency List: */



/**
 * @constructor
 */
org.apache.royale.utils.StringPadder = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.StringPadder', org.apache.royale.utils.StringPadder);


/**
 *  Pads a string with an arbitrary string.
 *
 *  @asparam str The string to be padded.
 *
 *  @asparam padChar The character used to pad the string. This should be a single character.
 *
 *  @asparam size The size of the padded string.
 *
 *  @asparam padRight Which side to add the padding on. By default it's added to the left.
 *
 *  @asreturn The padded string.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10
 *  @playerversion AIR 1.5
 *  @productversion Royale 1.0.0.1
 *  @productversion Royale 0.0
 * @export
 * @param {string} str
 * @param {string} padChar
 * @param {number} size
 * @param {boolean=} padRight
 * @return {string}
 */
org.apache.royale.utils.StringPadder.pad = function(str, padChar, size, padRight) {
  padRight = typeof padRight !== 'undefined' ? padRight : false;
  str = str ? str : "";
  size += 1;
  size -= str.length;
  var /** @type {string} */ p = new Array(size).join(padChar);
  if (padRight)
    return str + p;
  else
    return p + str;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.StringPadder.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StringPadder', qName: 'org.apache.royale.utils.StringPadder', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.StringPadder.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|pad': { type: 'String', declaredBy: 'org.apache.royale.utils.StringPadder', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'int', optional: false },{ index: 4, type: 'Boolean', optional: true } ]; }}
      };
    }
  };
};