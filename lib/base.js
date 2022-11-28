(function (window) {

    class Placeholder {

        /**
         * Create an empty array called `elements.contents` and assign it to the `elements` object
         */

        constructor() {
            this.elements = {};
            this.elements.contents = [];
        }

        /**
         * Create a new text node and set it as the title of the modal
         * @param title - The title of the dialog.
         * @returns Nothing.
         */

        setTitle(title) {
            this.elements.title = document.createTextNode(title);
            return this;
        }

        /**
         * Get the title of the current modal
         * @returns The title of the element.
         */

        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            return null;
        }

        /**
         * Add content to the body of the modal
         * @param html - The HTML to add to the contents.
         * @returns The `addContent` method returns the `this` object.
         */

        addContent(html) {
            this.elements.contents.push(html);
            return this;
        }

        /**
         * Get the contents of the <div> element
         * @returns The contents of the elements.
         */

        getContents() {
            return this.elements.contents;
        }
    }

    class Preloader {

        /**
         * The constructor function creates a new object and assigns it to the variable modal. 
         * The modal object is then assigned to the elements object
         * @param modal - The modal that is being created.
         */

        constructor(modal) {
            this.modal = modal;
            this.elements = {};
        }

        /**
         * Get the modal element
         * @returns The modal.
         */

        getModal() {
            return this.modal;
        }

        /**
         * Create a div element with the class name "preloader" and return it
         * @returns The preloader element.
         */

        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'preloader';
            return this.elements.preloader;
        }

        /**
         * Create a spinner element if it doesn't exist, and return it
         * @returns The spinner element.
         */

        getSpinner() {
            if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
            this.elements.spinner = document.createElement('div');
            this.elements.spinner.className = 'spinner';

            for (let item = 0; item < 3; item++) {
                let bounce = document.createElement('div');
                bounce.className = 'bounce-' + item;
                this.elements.spinner.appendChild(bounce);
            }

            return this.elements.spinner;
        }

        /**
         * Show a spinner on the page.
         * @returns Nothing.
         */

        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }

        /**
         * Hide the spinner.
         * @returns The `this` object.
         */

        hideSpinner() {
            let spinner = this.getSpinner();
            window.Modal.removeElementDOM(spinner);
            return this;
        }

        /**
         * Show the preloader by appending it to the modal's modules.
         * @returns Nothing.
         */

        show() {
            let preloader = this.getPreloader();
            this.getModal().getContainer().appendChild(preloader);
            return this;
        }

        /**
         * Hide the preloader.
         * @returns Nothing.
         */

        hide() {
            let preloader = this.getPreloader();
            window.Modal.removeElementDOM(preloader);
            return this;
        }

        /**
         * Returns a boolean indicating whether the preloader is currently visible
         * @returns The status of the preloader.
         */

        status() {
            return this.getPreloader().parentNode !== null;
        }
    }

    class Modal {

        /**
         * It returns a string.
         * @returns The `handle` method returns the string `data-handle-event`.
         */

        static handle() {
            return 'data-handle-event';
        }

        /**
         * It returns the string 'show'
         * @returns The string 'show'
         */

        static option() {
            return 'show';
        }

        /**
         * Create a new instance of the Modal class
         */

        constructor() {
            this.size = 8;
            this.elements = {};
            this.elements.preloader = new window.Modal.Preloader(this);
            this.actions = {
                // show: (function)
                // hide: (function)
            };
        }

        /**
         * It returns the preloader element.
         * @returns The preloader element.
         */

        getPreloader() {
            return this.elements.preloader;
        }

        /**
         * Set the size of the object
         * @param size - The size of the array.
         * @returns The object itself.
         */

        setSize(size) {
            this.size = size;
            return this;
        }

        /**
         * Get the size of the array
         * @returns The size of the linked list.
         */

        getSize() {
            return this.size
        }

        /**
         * It sets the show action for the dialog.
         * @param func - The function to be called when the action is triggered.
         * @returns The object itself.
         */

        setActionShow(func) {
            this.actions.show = func;
            return this;
        }

        /**
         * Get the action for the show action
         * If the `actions` object does not have a `show` property, it returns `null`.
         * @returns The `getActionShow()` method returns the `show` property of the `actions` object.
         */

        getActionShow() {
            if (this.actions.hasOwnProperty('show')) return this.actions.show;
            return null;
        }

        /**
         * It sets the function that will be called when the user clicks the hide button.
         * @param func - The function to be called when the action is triggered.
         * @returns The `setActionHide` method returns the `this` object.
         */

        setActionHide(func) {
            this.actions.hide = func;
            return this;
        }

        /**
         * Get the action to hide the current item
         * @returns The `getActionHide` method returns the value of the `hide` property of the
         * `actions` object. If the `actions` object does not have a `hide` property, it returns
         * `null`.
         */

        getActionHide() {
            if (this.actions.hasOwnProperty('hide')) return this.actions.hide;
            return null;
        }

        /**
         * * Create a new element in the dialog's body.
         * * Add a class to the new element.
         * * Add a close icon to the new element.
         * * Add an event listener to the close icon.
         * * Return the new element
         * @returns The header element.
         */

        getHeader() {
            if (this.elements.hasOwnProperty('header')) return this.elements.header;
            let dialog = this.getDialog(),
                close = this.constructor.getIcon('close');

            this.elements.header = document.createElement('div');
            this.elements.header.className = 'header';

            dialog.insertBefore(this.elements.header, dialog.firstChild);
            close.setAttribute(this.constructor.handle(), ':hide');
            close.addEventListener('click', this, false);

            this.elements.header.appendChild(close);
            return this.elements.header;
        }

        /**
         * Create a new element called title and append it to the header
         * @returns The title of the question.
         */

        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            this.elements.title = document.createElement('h3');
            this.getHeader().appendChild(this.elements.title);
            return this.elements.title;
        }

        /**
         * Set the title of the page
         * @param text - The text to be displayed in the title bar.
         * @returns Nothing.
         */

        setTitle(text) {
            let title = this.getTitle(),
                node = typeof text !== 'object' || text === null
                    ? document.createTextNode(text)
                    : text;

            title.innerHTML = '';
            title.appendChild(node);

            return this;
        }

        /**
         * Returns true if the dialog element exists
         * @returns The method returns a boolean value.
         */

        haveDialog() {
            return this.elements.hasOwnProperty('dialog');
        }

        /**
         * Create a dialog element if it doesn't exist, and return it
         * @returns The dialog element.
         */

        getDialog() {
            if (this.haveDialog()) return this.elements.dialog;

            let size = this.getSize();
            this.elements.dialog = document.createElement('div');
            this.elements.dialog.className = 'trinity pure-u-20-24 pure-u-lg-' + size + '-24';
            this.getContainer().appendChild(this.elements.dialog);

            return this.elements.dialog;
        }

        /**
         * Show the dialog
         * @returns Nothing.
         */

        showDialog() {
            this.getDialog().classList.remove('hide');
            return this;
        }

        /**
         * Hide the dialog
         * @returns Nothing.
         */

        hideDialog() {
            this.getDialog().classList.add('hide');
            return this;
        }

        /**
         * Create a new article element and add it to the dialog
         * @returns The content element.
         */

        getContent() {
            if (this.elements.hasOwnProperty('content')) return this.elements.content;
            this.elements.content = document.createElement('article');
            this.elements.content.className = 'content';
            this.getDialog().appendChild(this.elements.content);
            return this.elements.content;
        }

        /**
         * * Set the content of the element
         * @param html - The HTML to be added to the content area.
         * @returns The object.
         */

        setContent(html) {
            this.emptyContent();
            this.getContent().appendChild(html)
            return this;
        }

        /**
         * Add content to the body of the page
         * @param html - The HTML to be added to the content.
         * @returns The `addContent` method returns the `this` object.
         */

        addContent(html) {
            this.getContent().appendChild(html)
            return this;
        }

        /**
         * *Empty the content of the element.*
         * @returns Nothing.
         */
        emptyContent() {
            let content = this.getContent();
            while (!!content.children.length) this.constructor.removeElementDOM(content.children[0]);
            return this;
        }

        /**
         * Get the bottom element of the dialog
         * @returns The bottom element.
         */

        getBottom() {
            if (this.elements.hasOwnProperty('bottom')) return this.elements.bottom;
            this.getContent();
            this.elements.bottom = document.createElement('article');
            this.elements.bottom.className = 'bottom';
            this.getDialog().appendChild(this.elements.bottom);
            return this.elements.bottom;
        }

        /**
         * * Set the bottom of the modal to the given HTML
         * @param html - The HTML to be added to the bottom of the modal.
         * @returns The current instance of the object.
         */

        setBottom(html) {
            this.emptyBottom();
            this.getBottom().appendChild(html);
            return this;
        }

        /**
         * Add HTML to the bottom of the modal
         * @param html - The HTML to be added to the bottom of the modal.
         * @returns The object.
         */

        addBottom(html) {
            this.getContent();
            this.getBottom().appendChild(html)
            return this;
        }

        /**
         * *Empty the bottom of the modal.*
         * @returns The object.
         */

        emptyBottom() {
            let bottom = this.getBottom();
            while (!!bottom.children.length) this.constructor.removeElementDOM(bottom.children[0]);
            return this;
        }

        /**
         * Create a div element with the class name "modal pure-g" and return it
         * @returns The container element.
         */

        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'modal pure-g';
            return this.elements.container;
        }

        /**
         * Get the container of the current cell
         * @returns The container element.
         */

        out() {
            return this.getContainer();
        }

        /**
         * If the event target has a class attribute that matches the handle() function, then execute
         * the function
         * @param event - The event object that was passed to the event handler.
         * @returns The return value is the result of the last expression in the block.
         */

        handleEvent(event) {
            let attribute = this.constructor.closestAttribute(event.target, this.constructor.handle());
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }

        /**
         * Hide the element
         * @returns The instance of the class.
         */

        hide() {
            let hide = this.getActionHide();
            if (hide !== null
                && typeof hide === 'function') hide.call(this);

            this.getContainer().classList.remove(this.constructor.option());
            return this;
        }

        /**
         * The show function is called when the user clicks on the button. 
         * 
         * The show function is responsible for adding the class to the container. 
         * 
         * The show function is also responsible for calling the getActionShow function. 
         * 
         * @returns The instance of the class.
         */
        show() {
            let show = this.getActionShow();
            if (show !== null
                && typeof show === 'function') show.call(this);

            this.getContainer().classList.add(this.constructor.option());
            return this;
        }

        /**
         * *Returns* `true` if the container is currently in the `open` state, `false` otherwise
         * @returns The classList property of the container.
         */

        status() {
            return this.getContainer().classList.contains(this.constructor.option());
        }

        /**
         * Find the closest attribute to the target element
         * @param target - The element to search for the attribute.
         * @param attribute - The attribute to search for.
         * @param html - If true, the attribute is searched for in the HTML source code.
         * @returns The closest attribute.
         */

        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }

        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
         */

        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }

        /**
         * Create an HTML element with the class `material-icons` and the inner text of the material
         * icon
         * @param material - The name of the material to be displayed.
         * @returns A string of HTML.
         */

        static getIcon(material) {
            let i = document.createElement('i');
            i.className = 'material-icons';
            i.innerText = material;
            return i;
        }
    }

    window.Modal = Modal;
    window.Modal.Placeholder = Placeholder;
    window.Modal.Preloader = Preloader;

})(window);
