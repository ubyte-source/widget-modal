# Documentation widget-modal

Widget Javascript Modal is a library used to a modal winodw that appears over your current web page.

## Structure

library:
- [window.Modal](https://github.com/energia-source/widget-modal/tree/main/li#class-windowmodal-usable-methods)
- [window.Modal.Placeholder](https://github.com/energia-source/widget-modal/tree/main/li#class-windowmodalplaceholder-usable-methods)
- [window.Modal.Preloader](https://github.com/energia-source/widget-modal/tree/main/li#class-windowmodalpreloader-usable-methods)

<br>

#### ***Class window.Modal usable methods***

##### `static handle()`

It returns a string.

 * **Returns:** The `handle` method returns the string `data-handle-event`.

##### `static option()`

It returns the string 'show'

 * **Returns:** The string 'show'

##### `constructor()`

Create a new instance of the Modal class

##### `setSize(size)`

Set the size of the object

 * **Parameters:** `size` — The size of the array.
 * **Returns:** The object itself.

##### `getSize()`

Get the size of the array

 * **Returns:** The size of the linked list.

##### `setActionShow(func)`

It sets the show action for the dialog.

 * **Parameters:** `func` — The function to be called when the action is triggered.
 * **Returns:** The object itself.

##### `getActionShow()`

Get the action for the show action If the `actions` object does not have a `show` property, it returns `null`.

 * **Returns:** The `getActionShow()` method returns the `show` property of the `actions` object.

##### `setActionHide(func)`

It sets the function that will be called when the user clicks the hide button.

 * **Parameters:** `func` — The function to be called when the action is triggered.
 * **Returns:** The `setActionHide` method returns the `this` object.

##### `getActionHide()`

Get the action to hide the current item

 * **Returns:** The `getActionHide` method returns the value of the `hide` property of the

     `actions` object. If the `actions` object does not have a `hide` property, it returns

     `null`.

##### `getHeader()`

* Create a new element in the dialog's body. * Add a class to the new element. * Add a close icon to the new element. * Add an event listener to the close icon. * Return the new element

 * **Returns:** The header element.

##### `getTitle()`

Create a new element called title and append it to the header

 * **Returns:** The title of the question.

##### `setTitle(text)`

Set the title of the page

 * **Parameters:** `text` — The text to be displayed in the title bar.
 * **Returns:** Nothing

##### `haveDialog()`

Returns true if the dialog element exists

 * **Returns:** The method returns a boolean value.

##### `getDialog()`

Create a dialog element if it doesn't exist, and return it

 * **Returns:** The dialog element.

##### `showDialog()`

Show the dialog

 * **Returns:** Nothing

##### `hideDialog()`

Hide the dialog

 * **Returns:** Nothing

##### `getContent()`

Create a new article element and add it to the dialog

 * **Returns:** The content element.

##### `setContent(html)`

* Set the content of the element

 * **Parameters:** `html` — The HTML to be added to the content area.
 * **Returns:** The object.

##### `addContent(html)`

Add content to the body of the page

 * **Parameters:** `html` — The HTML to be added to the content.
 * **Returns:** The `addContent` method returns the `this` object.

##### `emptyContent()`

*Empty the content of the element.*

 * **Returns:** Nothing

##### `getBottom()`

Get the bottom element of the dialog

 * **Returns:** The bottom element.

##### `setBottom(html)`

* Set the bottom of the modal to the given HTML

 * **Parameters:** `html` — The HTML to be added to the bottom of the modal.
 * **Returns:** The current instance of the object.

##### `addBottom(html)`

Add HTML to the bottom of the modal

 * **Parameters:** `html` — The HTML to be added to the bottom of the modal.
 * **Returns:** The object.

##### `emptyBottom()`

*Empty the bottom of the modal.*

 * **Returns:** The object.

##### `getContainer()`

Create a div element with the class name "modal pure-g" and return it

 * **Returns:** The container element.

##### `out()`

Get the container of the current cell

 * **Returns:** The container element.

##### `handleEvent(event)`

If the event target has a class attribute that matches the handle() function, then execute the function

 * **Parameters:** `event` — The event object that was passed to the event handler.
 * **Returns:** The return value is the result of the last expression in the block.

##### `hide()`

Hide the element

 * **Returns:** The instance of the class.

##### `show()`

The show function is called when the user clicks on the button.

The show function is responsible for adding the class to the container.

The show function is also responsible for calling the getActionShow function.

 * **Returns:** The instance of the class.

##### `status()`

*Returns* `true` if the container is currently in the `open` state, `false` otherwise

 * **Returns:** The classList property of the container.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML source code.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

##### `static getIcon(material)`

Create an HTML element with the class `material-icons` and the inner text of the material icon

 * **Parameters:** `material` — The name of the material to be displayed.
 * **Returns:** A string of HTML.

<br>

#### ***Class window.Modal.Placeholder usable methods***

##### `constructor()`

Create an empty array called `elements.contents` and assign it to the `elements` object

##### `setTitle(title)`

Create a new text node and set it as the title of the modal

 * **Parameters:** `title` — The title of the dialog.
 * **Returns:** Nothing

##### `getTitle()`

Get the title of the current modal

 * **Returns:** The title of the element.

##### `addContent(html)`

Add content to the body of the modal

 * **Parameters:** `html` — The HTML to add to the contents.
 * **Returns:** The `addContent` method returns the `this` object.

##### `getContents()`

Get the contents of the <div> element

 * **Returns:** The contents of the elements.

<br>

#### ***Class window.Modal.Preloader usable methods***

##### `constructor(modal)`

The constructor function creates a new object and assigns it to the variable modal. The modal object is then assigned to the elements object

 * **Parameters:** `modal` — The modal that is being created.

##### `getModal()`

Get the modal element

 * **Returns:** The modal.

##### `getPreloader()`

Create a div element with the class name "preloader" and return it

 * **Returns:** The preloader element.

##### `getSpinner()`

Create a spinner element if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `showSpinner()`

Show a spinner on the page.

 * **Returns:** Nothing

##### `hideSpinner()`

Hide the spinner.

 * **Returns:** The `this` object.

##### `show()`

Show the preloader by appending it to the modal's modules.

 * **Returns:** Nothing

##### `hide()`

Hide the preloader.

 * **Returns:** Nothing

##### `status()`

Returns a boolean indicating whether the preloader is currently visible

 * **Returns:** The status of the preloader.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
