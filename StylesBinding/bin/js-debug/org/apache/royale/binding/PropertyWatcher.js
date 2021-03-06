/**
 * Generated by Apache Royale Compiler from org\apache\royale\binding\PropertyWatcher.as
 * org.apache.royale.binding.PropertyWatcher
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.PropertyWatcher');
/* Royale Dependency List: org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.binding.WatcherBase');



/**
 *  Constructor.
 *  
 *  @asparam source The object who's property we are watching.
 *  @asparam propertyName The name of the property we are watching.
 *  @asparam eventNames The name or array of names of events that get
 *  dispatched when the property changes.
 *  @asparam getterFunction  A function to call to get the value
 *  of the property changes if the property is not public.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.binding.WatcherBase}
 * @param {Object} document
 * @param {string} propertyName
 * @param {Object} eventNames
 * @param {Function} getterFunction
 */
org.apache.royale.binding.PropertyWatcher = function(document, propertyName, eventNames, getterFunction) {
  org.apache.royale.binding.PropertyWatcher.base(this, 'constructor');
  this.document = document;
  this.propertyName = propertyName;
  this.getterFunction = getterFunction;
  this.eventNames = eventNames;
};
goog.inherits(org.apache.royale.binding.PropertyWatcher, org.apache.royale.binding.WatcherBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.PropertyWatcher', org.apache.royale.binding.PropertyWatcher);


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.binding.PropertyWatcher.prototype.dispatcher;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.document;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.source;


/**
 * @export
 * @type {string}
 */
org.apache.royale.binding.PropertyWatcher.prototype.propertyName;


/**
 * @export
 * @type {Object}
 */
org.apache.royale.binding.PropertyWatcher.prototype.eventNames;


/**
 * @export
 * @type {Function}
 */
org.apache.royale.binding.PropertyWatcher.prototype.getterFunction;


/**
 *  The event handler that gets called when
 *  the change events are dispatched.
 *  
 *  @asparam event The event that was dispatched to notify of a value change.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.events.ValueChangeEvent
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.PropertyWatcher.prototype.changeHandler = function(event) {
  if (org.apache.royale.utils.Language.is(event, org.apache.royale.events.ValueChangeEvent)) {
    var /** @type {string} */ propName = event.propertyName;
    if (propName != this.propertyName)
      return;
  }
  this.wrapUpdate(org.apache.royale.utils.Language.closure(this.updateProperty, this, 'updateProperty'));
  this.notifyListeners();
};


/**
 *  @asprivate
 *  @royaleignorecoercion org.apache.royale.binding.PropertyWatcher
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @export
 * @override
 */
org.apache.royale.binding.PropertyWatcher.prototype.parentChanged = function(parent) {
  if (this.dispatcher)
    this.removeEventListeners();
  if (org.apache.royale.utils.Language.is(parent, org.apache.royale.binding.PropertyWatcher))
    this.source = parent.value;
  else
    this.source = parent;
  if (this.source) {
    if (org.apache.royale.utils.Language.is(this.source, org.apache.royale.events.IEventDispatcher))
      this.dispatcher = this.source;
    else if (org.apache.royale.utils.Language.is(this.source, Object) && this.source['staticEventDispatcher'] != null)
      this.dispatcher = this.source.staticEventDispatcher;
  }
  if (this.dispatcher)
    this.addEventListeners();
  this.wrapUpdate(org.apache.royale.utils.Language.closure(this.updateProperty, this, 'updateProperty'));
  this.notifyListeners();
};


/**
 * @royaleignorecoercion Array
 * @royaleignorecoercion String
 * @private
 */
org.apache.royale.binding.PropertyWatcher.prototype.addEventListeners = function() {
  if (org.apache.royale.utils.Language.is(this.eventNames, String)) {
    this.dispatcher.addEventListener(this.eventNames, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
  } else if (org.apache.royale.utils.Language.is(this.eventNames, Array)) {
    var /** @type {Array} */ arr = this.eventNames;
    var /** @type {number} */ n = arr.length;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      var /** @type {string} */ eventName = org.apache.royale.utils.Language.string(this.eventNames[i]);
      this.dispatcher.addEventListener(eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
    }
  }
};


/**
 * @royaleignorecoercion Array
 * @royaleignorecoercion String
 * @private
 */
org.apache.royale.binding.PropertyWatcher.prototype.removeEventListeners = function() {
  if (org.apache.royale.utils.Language.is(this.eventNames, String))
    this.dispatcher.removeEventListener(this.eventNames, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler')); else if (org.apache.royale.utils.Language.is(this.eventNames, Array)) {
    var /** @type {Array} */ arr = this.eventNames;
    var /** @type {number} */ n = arr.length;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      var /** @type {string} */ eventName = org.apache.royale.utils.Language.string(this.eventNames[i]);
      this.dispatcher.removeEventListener(eventName, org.apache.royale.utils.Language.closure(this.changeHandler, this, 'changeHandler'));
    }
  }
  this.dispatcher = null;
};


/**
 *  Gets the actual property then updates
 *  the Watcher's children appropriately.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @private
 */
org.apache.royale.binding.PropertyWatcher.prototype.updateProperty = function() {
  if (this.source) {
    if (this.propertyName == "this") {
      this.value = this.source;
    } else {
      if (this.getterFunction != null) {
        try {
          this.value = this.getterFunction.apply(this.document, [this.propertyName]);
        } catch (e) {
          this.value = null;
        }
      } else {
        this.value = this.source[this.propertyName];
      }
    }
  } else {
    this.value = null;
  }
  this.updateChildren();
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.PropertyWatcher.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'PropertyWatcher', qName: 'org.apache.royale.binding.PropertyWatcher', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.PropertyWatcher.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'document': { type: 'Object'},
        'source': { type: 'Object'},
        'propertyName': { type: 'String'},
        'eventNames': { type: 'Object'},
        'getterFunction': { type: 'Function'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'PropertyWatcher': { type: '', declaredBy: 'org.apache.royale.binding.PropertyWatcher', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'Object', optional: false },{ index: 4, type: 'Function', optional: false } ]; }},
        'parentChanged': { type: 'void', declaredBy: 'org.apache.royale.binding.PropertyWatcher', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
