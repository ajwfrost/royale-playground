/**
 * Generated by Apache Royale Compiler from org\apache\royale\events\utils\EventUtils.as
 * org.apache.royale.events.utils.EventUtils
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.utils.EventUtils');
/* Royale Dependency List: */



/**
 * @constructor
 */
org.apache.royale.events.utils.EventUtils = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.events.utils.EventUtils', org.apache.royale.events.utils.EventUtils);


/**
 * @export
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @return {Object}
 */
org.apache.royale.events.utils.EventUtils.createEvent = function(type, bubbles, cancelable) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  var /** @type {Object} */ customEvent = null;
  try {
    customEvent = new window.Event(type, {bubbles:bubbles, cancelable:cancelable});
    return customEvent;
  } catch (e) {
  }
  if (!customEvent) {
    customEvent = document.createEvent("Event");
    customEvent.initEvent(type, bubbles, cancelable);
  }
  return customEvent;
};


/**
 * @export
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {*=} cancelable
 * @param {Object=} params
 * @return {Object}
 */
org.apache.royale.events.utils.EventUtils.createMouseEvent = function(type, bubbles, cancelable, params) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  params = typeof params !== 'undefined' ? params : null;
  var /** @type {Object} */ mouseEvent = null;
  if (!params) {
    params = {};
  }
  try {
    params.bubbles = bubbles;
    params.cancelable = cancelable;
    mouseEvent = new window.MouseEvent(type, params);
    return mouseEvent;
  } catch (e) {
  }
  if (!mouseEvent) {
    mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(type, bubbles, cancelable, params.view, params.detail, params.screenX, params.screenY, params.clientX, params.clientY, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.button, params.relatedTarget);
  }
  return mouseEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.utils.EventUtils.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'EventUtils', qName: 'org.apache.royale.events.utils.EventUtils', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.utils.EventUtils.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|createEvent': { type: 'Object', declaredBy: 'org.apache.royale.events.utils.EventUtils', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '|createMouseEvent': { type: 'Object', declaredBy: 'org.apache.royale.events.utils.EventUtils', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: '*', optional: true },{ index: 4, type: 'Object', optional: true } ]; }}
      };
    }
  };
};
