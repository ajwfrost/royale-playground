# Bindable styles

When the BindableCSSStyles class is used, it will dispatch a ValueChangeEvent whenever a property is changed.
So if we programmatically change a style e.g. via a state change or via a call to `myUIelement.style.backgroundColor = "red"`,
the style object is updated and the ValueChangeEvent is dispatched.

However there was nothing that caused the actual HTML element to be updated following this change, so the UI object
whose style was changed did not actually visually change (with a JS build).

The BindableCSSStyles object now listens to any change made to itself via the code, and then will call the `applyStyles()`
function on the ValuesManager which formats the new style properly and then assigns it to the UI object's HTML element.

We needed to keep a reference to the UI object within our BindableCSSStyles class, hence making this implement the IBead
interface and caching the object via the `strand` setter. This means that the BindableCSSStyles class has become a bead,
but rather than [counterintuitively?] setting this within the <beads> list, we just check for the IBead interface during
the 'style' assignment within UIBase. This means that the updates will happen automatically and no other code changes
need to be done by the end user; they can just have a BindableCSSStyles object rather than a SimpleCSSStyles object declared
within their <style> property.

Note that it might be possible to also cope with someone using the BindableCSSStyles object within the <beads> declaration,
where we could add ourselves to the strand as its `style` property - but this may just cause confusion and would potentially
allow someone to declare styles objects twice for a single UI element.

The code in the "src/changes" subfolder just demonstrate the changes that we propose to be merged into the actual UIBase
and BindableCSSStyles classes within Royale - we are not expecting to create new specialisation classes. The original idea
was that this could then be used with the existing Royale SDK to demonstrate these updates, but the use of private variables
within the UIBase declaration mean that this app won't build unless `_style` is made `protected`.. hence for convenience,
we are also submitting the "bin" folder so that the output can be easily viewed.

