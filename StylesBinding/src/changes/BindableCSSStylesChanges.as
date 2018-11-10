package changes
{
    import org.apache.royale.core.BindableCSSStyles;
    import org.apache.royale.core.IBead;
    import org.apache.royale.core.IStrand;
    import org.apache.royale.core.IUIBase;
    import org.apache.royale.core.ValuesManager;
  	import org.apache.royale.events.ValueChangeEvent;

    public class BindableCSSStylesChanges extends BindableCSSStyles implements IBead
    {
        public function BindableCSSStylesChanges()
        {
            super();
        }
        
        private var _strand : IStrand;
        
        public function set strand(value:IStrand):void
        {
            trace("Setting strand for BindableCSSStylesChanges");
            /*
            // in case someone adds this object to the beads list, instead of assigning it
            // to the 'styles' property, we can check for this and add ourselves if necessary
            var uiObject : UIBase = value as UIBase;
            if (uiObject && (uiObject.style != this))
            {
                uiObject.style = this; // will recurse but only once
            }
            else
            */
            {
                _strand = value;
                COMPILE::JS
                {
                    // listen to ourselves in case one of the styles is changed programmatically
                    this.addEventListener(ValueChangeEvent.VALUE_CHANGE, styleChangeHandler);
                }
            }
        }
        
        /**
         * Handles a single style value being updated, and applies this to the strand
         * @param value The event containing new style properties.
         */
        COMPILE::JS
        protected function styleChangeHandler(value:ValueChangeEvent):void
        {
            var uiObject : IUIBase = _strand as IUIBase;
            if (uiObject)
            {
                var newStyle:Object = {};
                trace("BindableCSSStyles setting style [" + value.propertyName + "] to " + value.newValue);
                newStyle[value.propertyName] = value.newValue;
                ValuesManager.valuesImpl.applyStyles(uiObject, newStyle);
            }
        }

    }
}
