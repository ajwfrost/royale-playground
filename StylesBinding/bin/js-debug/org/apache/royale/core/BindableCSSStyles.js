/**
 * Generated by Apache Royale Compiler from org\apache\royale\core\BindableCSSStyles.as
 * org.apache.royale.core.BindableCSSStyles
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.BindableCSSStyles');
/* Royale Dependency List: org.apache.royale.events.ValueChangeEvent*/

goog.require('org.apache.royale.events.EventDispatcher');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 */
org.apache.royale.core.BindableCSSStyles = function() {
  
  this.styleList_ = {"top":1, "bottom":1, "left":1, "right":1, "padding":1, "paddingLeft":1, "paddingRight":1, "paddingTop":1, "paddingBottom":1, "margin":1, "marginLeft":1, "marginRight":1, "marginTop":1, "marginBottom":1, "verticalAlign":1, "fontFamily":1, "fontSize":1, "color":1, "fontWeight":1, "fontStyle":1, "backgroundColor":1, "backgroundImage":1, "border":1, "borderColor":1, "borderStyle":1, "borderRadius":1, "borderWidth":1};
  org.apache.royale.core.BindableCSSStyles.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.BindableCSSStyles, org.apache.royale.events.EventDispatcher);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.BindableCSSStyles', org.apache.royale.core.BindableCSSStyles);


/**
 * @export
 * @type {Object}
 */
org.apache.royale.core.BindableCSSStyles.prototype.styleList_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.top_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.bottom_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.left_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.right_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.padding_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.paddingLeft_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.paddingRight_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.paddingTop_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.paddingBottom_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.margin_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.marginLeft_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.marginRight_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.marginTop_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.marginBottom_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.verticalAlign_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.fontFamily_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.fontSize_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.color_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.fontWeight_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.fontStyle_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.backgroundColor_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.backgroundImage_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.border_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.borderColor_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.borderStyle_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.borderRadius_;


/**
 * @export
 * @type {*}
 */
org.apache.royale.core.BindableCSSStyles.prototype.borderWidth_;Object.defineProperties(org.apache.royale.core.BindableCSSStyles.prototype, /** @lends {org.apache.royale.core.BindableCSSStyles.prototype} */ {
/** @export
  * @type {*} */
backgroundColor: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.backgroundColor_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.backgroundColor_) {
    console.log("Setting background color to " + value);
    var oldValue = this.backgroundColor_;
    this.backgroundColor_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "backgroundColor", oldValue, value));
}
}},/** @export
  * @type {*} */
backgroundImage: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.backgroundImage_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.backgroundImage_) {
    var oldValue = this.backgroundImage_;
    this.backgroundImage_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "backgroundImage", oldValue, value));
}
}},/** @export
  * @type {*} */
border: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.border_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.border_) {
    var oldValue = this.border_;
    this.border_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "border", oldValue, value));
}
}},/** @export
  * @type {*} */
borderColor: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.borderColor_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.borderColor_) {
    var oldValue = this.borderColor_;
    this.borderColor_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "borderColor", oldValue, value));
}
}},/** @export
  * @type {*} */
borderRadius: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.borderRadius_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.borderRadius_) {
    var oldValue = this.borderRadius_;
    this.borderRadius_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "borderRadius", oldValue, value));
}
}},/** @export
  * @type {*} */
borderStyle: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.borderStyle_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.borderStyle_) {
    var oldValue = this.borderStyle_;
    this.borderStyle_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "borderStyle", oldValue, value));
}
}},/** @export
  * @type {*} */
borderWidth: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.borderWidth_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.borderWidth_) {
    var oldValue = this.borderWidth_;
    this.borderWidth_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "borderWidth", oldValue, value));
}
}},/** @export
  * @type {*} */
bottom: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.bottom_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.bottom_) {
    var oldValue = this.bottom_;
    this.bottom_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "bottom", oldValue, value));
}
}},/** @export
  * @type {*} */
color: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.color_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.color_) {
    var oldValue = this.color_;
    this.color_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "color", oldValue, value));
}
}},/** @export
  * @type {*} */
fontFamily: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.fontFamily_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.fontFamily_) {
    var oldValue = this.fontFamily_;
    this.fontFamily_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "fontFamily", oldValue, value));
}
}},/** @export
  * @type {*} */
fontSize: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.fontSize_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.fontSize_) {
    var oldValue = this.fontSize_;
    this.fontSize_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "fontSize", oldValue, value));
}
}},/** @export
  * @type {*} */
fontStyle: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.fontStyle_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.fontStyle_) {
    var oldValue = this.fontStyle_;
    this.fontStyle_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "fontStyle", oldValue, value));
}
}},/** @export
  * @type {*} */
fontWeight: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.fontWeight_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.fontWeight_) {
    var oldValue = this.fontWeight_;
    this.fontWeight_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "fontWeight", oldValue, value));
}
}},/** @export
  * @type {*} */
left: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.left_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.left_) {
    var oldValue = this.left_;
    this.left_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "left", oldValue, value));
}
}},/** @export
  * @type {*} */
margin: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.margin_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.margin_) {
    var oldValue = this.margin_;
    this.margin_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "margin", oldValue, value));
}
}},/** @export
  * @type {*} */
marginBottom: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.marginBottom_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.marginBottom_) {
    var oldValue = this.marginBottom_;
    this.marginBottom_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "marginBottom", oldValue, value));
}
}},/** @export
  * @type {*} */
marginLeft: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.marginLeft_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.marginLeft_) {
    var oldValue = this.marginLeft_;
    this.marginLeft_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "marginLeft", oldValue, value));
}
}},/** @export
  * @type {*} */
marginRight: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.marginRight_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.marginRight_) {
    var oldValue = this.marginRight_;
    this.marginRight_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "marginRight", oldValue, value));
}
}},/** @export
  * @type {*} */
marginTop: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.marginTop_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.marginTop_) {
    var oldValue = this.marginTop_;
    this.marginTop_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "marginTop", oldValue, value));
}
}},/** @export
  * @type {*} */
padding: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.padding_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.padding_) {
    var oldValue = this.padding_;
    this.padding_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "padding", oldValue, value));
}
}},/** @export
  * @type {*} */
paddingBottom: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.paddingBottom_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.paddingBottom_) {
    var oldValue = this.paddingBottom_;
    this.paddingBottom_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "paddingBottom", oldValue, value));
}
}},/** @export
  * @type {*} */
paddingLeft: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.paddingLeft_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.paddingLeft_) {
    var oldValue = this.paddingLeft_;
    this.paddingLeft_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "paddingLeft", oldValue, value));
}
}},/** @export
  * @type {*} */
paddingRight: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.paddingRight_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.paddingRight_) {
    var oldValue = this.paddingRight_;
    this.paddingRight_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "paddingRight", oldValue, value));
}
}},/** @export
  * @type {*} */
paddingTop: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.paddingTop_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.paddingTop_) {
    var oldValue = this.paddingTop_;
    this.paddingTop_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "paddingTop", oldValue, value));
}
}},/** @export
  * @type {*} */
right: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.right_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.right_) {
    var oldValue = this.right_;
    this.right_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "right", oldValue, value));
}
}},/** @export
  * @type {Object} */
styleList: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.styleList_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.styleList_) {
    var oldValue = this.styleList_;
    this.styleList_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "styleList", oldValue, value));
}
}},/** @export
  * @type {*} */
top: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.top_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.top_) {
    var oldValue = this.top_;
    this.top_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "top", oldValue, value));
}
}},/** @export
  * @type {*} */
verticalAlign: {
/** @this {org.apache.royale.core.BindableCSSStyles} */
  get: function() {
  return this.verticalAlign_;
  },

/** @this {org.apache.royale.core.BindableCSSStyles} */
set: function(value) {
if (value != this.verticalAlign_) {
    var oldValue = this.verticalAlign_;
    this.verticalAlign_ = value;
    this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(
         this, "verticalAlign", oldValue, value));
}
}}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.BindableCSSStyles.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BindableCSSStyles', qName: 'org.apache.royale.core.BindableCSSStyles', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.BindableCSSStyles.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'styleList': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'top': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'bottom': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'left': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'right': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'padding': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'paddingLeft': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'paddingRight': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'paddingTop': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'paddingBottom': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'margin': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'marginLeft': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'marginRight': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'marginTop': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'marginBottom': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'verticalAlign': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'fontFamily': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'fontSize': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'color': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'fontWeight': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'fontStyle': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'backgroundColor': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'backgroundImage': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'border': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'borderColor': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'borderStyle': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'borderRadius': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'},
        'borderWidth': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.core.BindableCSSStyles'}
      };
    },
    methods: function () {
      return {
        'BindableCSSStyles': { type: '', declaredBy: 'org.apache.royale.core.BindableCSSStyles'}
      };
    },
    metadata: function () { return [ { name: 'Bindable' } ]; }
  };
};
