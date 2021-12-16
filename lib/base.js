(function (window) {

    class Placeholder {

        constructor() {
            this.elements = {};
            this.elements.contents = [];
        }

        setTitle(title) {
            this.elements.title = document.createTextNode(title);
            return this;
        }
        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            return null;
        }
        addContent(html) {
            this.elements.contents.push(html);
            return this;
        }
        getContents() {
            return this.elements.contents;
        }
    }

    class Preloader {

        constructor(modal) {
            this.modal = modal;
            this.elements = {};
        }

        getModal() {
            return this.modal;
        }
        getPreloader() {
            if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
            this.elements.preloader = document.createElement('div');
            this.elements.preloader.className = 'preloader';
            return this.elements.preloader;
        }
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
        showSpinner() {
            let spinner = this.getSpinner();
            this.getPreloader().appendChild(spinner);
            return this;
        }
        hideSpinner() {
            let spinner = this.getSpinner();
            window.Modal.removeElementDOM(spinner);
            return this;
        }
        show() {
            let preloader = this.getPreloader();
            this.getModal().getModules().appendChild(preloader);
            return this;
        }
        hide() {
            let preloader = this.getPreloader();
            window.Modal.removeElementDOM(preloader);
            return this;
        }
        status() {
            return this.getPreloader().parentNode !== null;
        }
    }

    class Modal {

        static handle() {
            return 'data-handle-event';
        }
        static option() {
            return 'show';
        }

        constructor() {
            this.size = 8;
            this.elements = {};
            this.elements.preloader = new window.Modal.Preloader(this);
            this.actions = {
                // show: (function)
                // hide: (function)
            };
        }

        setSize(size) {
            this.size = size;
            return this;
        }
        getSize() {
            return this.size
        }
        setActionShow(func) {
            this.actions.show = func;
            return this;
        }
        getActionShow() {
            if (this.actions.hasOwnProperty('show')) return this.actions.show;
            return null;
        }
        setActionHide(func) {
            this.actions.hide = func;
            return this;
        }
        getActionHide() {
            if (this.actions.hasOwnProperty('hide')) return this.actions.hide;
            return null;
        }
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
        getTitle() {
            if (this.elements.hasOwnProperty('title')) return this.elements.title;
            this.elements.title = document.createElement('h3');
            this.getHeader().appendChild(this.elements.title);
            return this.elements.title;
        }
        setTitle(text) {
            let title = this.getTitle(),
                node = typeof text !== 'object' || text === null
                    ? document.createTextNode(text)
                    : text;

            title.innerHTML = '';
            title.appendChild(node);

            return this;
        }
        haveDialog() {
            return this.elements.hasOwnProperty('dialog');
        }
        getDialog() {
            if (this.haveDialog()) return this.elements.dialog;

            let size = this.getSize();
            this.elements.dialog = document.createElement('div');
            this.elements.dialog.className = 'trinity pure-u-20-24 pure-u-lg-' + size + '-24';
            this.getContainer().appendChild(this.elements.dialog);

            return this.elements.dialog;
        }
        showDialog() {
            this.getDialog().classList.remove('hide');
            return this;
        }
        hideDialog() {
            this.getDialog().classList.add('hide');
            return this;
        }
        getContent() {
            if (this.elements.hasOwnProperty('content')) return this.elements.content;
            this.elements.content = document.createElement('article');
            this.elements.content.className = 'content';
            this.getDialog().appendChild(this.elements.content);
            return this.elements.content;
        }
        setContent(html) {
            this.emptyContent();
            this.getContent().appendChild(html)
            return this;
        }
        addContent(html) {
            this.getContent().appendChild(html)
            return this;
        }
        emptyContent() {
            let content = this.getContent();
            while (!!content.children.length) this.constructor.removeElementDOM(content.children[0]);
            return this;
        }
        getBottom() {
            if (this.elements.hasOwnProperty('bottom')) return this.elements.bottom;
            this.getContent();
            this.elements.bottom = document.createElement('article');
            this.elements.bottom.className = 'bottom';
            this.getDialog().appendChild(this.elements.bottom);
            return this.elements.bottom;
        }
        setBottom(html) {
            this.emptyBottom();
            this.getBottom().appendChild(html);
            return this;
        }
        addBottom(html) {
            this.getContent();
            this.getBottom().appendChild(html)
            return this;
        }
        emptyBottom() {
            let bottom = this.getBottom();
            while (!!bottom.children.length) this.constructor.removeElementDOM(bottom.children[0]);
            return this;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'modal pure-g';
            return this.elements.container;
        }
        out() {
            return this.getContainer();
        }
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
        hide() {
            let hide = this.getActionHide();
            if (hide !== null
                && typeof hide === 'function') hide.call(this);

            this.getContainer().classList.remove(this.constructor.option());
            return this;
        }
        show() {
            let show = this.getActionShow();
            if (show !== null
                && typeof show === 'function') show.call(this);

            this.getContainer().classList.add(this.constructor.option());
            return this;
        }
        status() {
            return this.getContainer().classList.contains(this.constructor.option());
        }
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
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }
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