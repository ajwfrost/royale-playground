package changes
{
    import org.apache.royale.html.Container;
    import org.apache.royale.core.IBead;
    import org.apache.royale.core.ValuesManager;
    
    public class UIBaseChanges extends Container
    {
        public function UIBaseChanges()
        {
            super();
        }
        
        override public function set style(value : Object) : void
        {
            trace("Setting style...");
            if (_style !== value)
            {
/*** New >> ***/
                // if the old style was a bead, remove it
                var styleAsBead : IBead = _style as IBead;
                if (styleAsBead) styleAsBead.strand = null;
/*** << New ***/
                
                if (value is String)
                {
                    _style = ValuesManager.valuesImpl.parseStyles(value as String);
                }
                else
                    _style = value;
                if (!isNaN(y))
                    _style.top = y;
                if (!isNaN(x))
                    _style.left = x;
				COMPILE::JS
				{
					if (parent)
						ValuesManager.valuesImpl.applyStyles(this, _style);
				}
                dispatchEvent(new Event("stylesChanged"));
/*** New >> ***/
                // if the new style is a bead, add it
                styleAsBead = _style as IBead;
                if (styleAsBead) styleAsBead.strand = this;
/*** << New ***/
            }
       }
    }
}

