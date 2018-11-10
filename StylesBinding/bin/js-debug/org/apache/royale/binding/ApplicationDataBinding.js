/**
 * Generated by Apache Royale Compiler from org\apache\royale\binding\ApplicationDataBinding.as
 * org.apache.royale.binding.ApplicationDataBinding
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.ApplicationDataBinding');
/* Royale Dependency List: org.apache.royale.binding.ConstantBinding,org.apache.royale.binding.GenericBinding,org.apache.royale.binding.SimpleBinding,org.apache.royale.core.IBinding,org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.binding.DataBindingBase');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.binding.DataBindingBase}
 */
org.apache.royale.binding.ApplicationDataBinding = function() {
  org.apache.royale.binding.ApplicationDataBinding.base(this, 'constructor');
};
goog.inherits(org.apache.royale.binding.ApplicationDataBinding, org.apache.royale.binding.DataBindingBase);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.binding.ApplicationDataBinding', org.apache.royale.binding.ApplicationDataBinding);


/**
 * @royaleignorecoercion org.apache.royale.core.IBinding
 * @royaleignorecoercion String
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.ApplicationDataBinding.prototype.viewChangedHandler = function(event) {
  if (!("_bindings" in this._strand))
    return;
  var /** @type {Object} */ fieldWatcher;
  var /** @type {org.apache.royale.binding.SimpleBinding} */ sb;
  var /** @type {Array} */ bindingData = this._strand["_bindings"];
  var /** @type {number} */ n = Number(bindingData[0]);
  var /** @type {Array} */ bindings = [];
  var /** @type {Object} */ binding = null;
  var /** @type {number} */ i = 0;
  var /** @type {number} */ index = 1;
  for (i = 0; i < n; i++) {
    binding = {};
    binding.source = bindingData[index++];
    binding.destFunc = bindingData[index++];
    binding.destination = bindingData[index++];
    bindings.push(binding);
  }
  var /** @type {Object} */ watchers = this.decodeWatcher(bindingData.slice(index));
  for (i = 0; i < n; i++) {
    binding = bindings[i];
    var /** @type {Object} */ compWatcher = null;
    if (org.apache.royale.utils.Language.is(binding.source, String)) {
      fieldWatcher = watchers.watcherMap[binding.source];
      if (org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
        sb = new org.apache.royale.binding.SimpleBinding();
        sb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        sb.eventName = fieldWatcher.eventNames;
        sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source);
        sb.setDocument(this._strand);
        this.prepareCreatedBinding(sb, binding);
      }
    } else if (org.apache.royale.utils.Language.is(binding.source, Array) && binding.source[0] in this._strand && binding.source.length == 2 && binding.destination.length == 2) {
      compWatcher = watchers.watcherMap[binding.source[0]];
      if (compWatcher) {
        fieldWatcher = compWatcher.children.watcherMap[binding.source[1]];
      }
      if (fieldWatcher && org.apache.royale.utils.Language.is(fieldWatcher.eventNames, String)) {
        sb = new org.apache.royale.binding.SimpleBinding();
        sb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        sb.eventName = fieldWatcher.eventNames;
        sb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
        sb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
        sb.setDocument(this._strand);
        this.prepareCreatedBinding(sb, binding);
      } else if (fieldWatcher && fieldWatcher.eventNames == null) {
        var /** @type {org.apache.royale.binding.ConstantBinding} */ cb = new org.apache.royale.binding.ConstantBinding();
        cb.destinationPropertyName = org.apache.royale.utils.Language.string(binding.destination[1]);
        cb.sourceID = org.apache.royale.utils.Language.string(binding.source[0]);
        cb.sourcePropertyName = org.apache.royale.utils.Language.string(binding.source[1]);
        cb.setDocument(this._strand);
        this.prepareCreatedBinding(cb, binding);
      }
    } else {
      this.makeGenericBinding(binding, i, watchers);
    }
    fieldWatcher = null;
  }
};


/**
 * @private
 * @param {Object} binding
 * @param {number} index
 * @param {Object} watchers
 */
org.apache.royale.binding.ApplicationDataBinding.prototype.makeGenericBinding = function(binding, index, watchers) {
  var /** @type {org.apache.royale.binding.GenericBinding} */ gb = new org.apache.royale.binding.GenericBinding();
  gb.setDocument(this._strand);
  gb.destinationData = binding.destination;
  gb.destinationFunction = binding.destFunc;
  gb.source = binding.source;
  this.setupWatchers(gb, index, watchers.watchers, null);
};


org.apache.royale.binding.ApplicationDataBinding.prototype.set__strand = function(value) {
  this._strand = value;
  this._strand.addEventListener("viewChanged", org.apache.royale.utils.Language.closure(this.viewChangedHandler, this, 'viewChangedHandler'));
};


Object.defineProperties(org.apache.royale.binding.ApplicationDataBinding.prototype, /** @lends {org.apache.royale.binding.ApplicationDataBinding.prototype} */ {
/**
  * @export
  * @type {org.apache.royale.core.IStrand} */
strand: {
set: org.apache.royale.binding.ApplicationDataBinding.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.ApplicationDataBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ApplicationDataBinding', qName: 'org.apache.royale.binding.ApplicationDataBinding', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.ApplicationDataBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.binding.ApplicationDataBinding'}
      };
    },
    methods: function () {
      return {
        'ApplicationDataBinding': { type: '', declaredBy: 'org.apache.royale.binding.ApplicationDataBinding'}
      };
    }
  };
};