# Documentation widget-modal

Widget Javascript Modal is a library used to a modal winodw that appears over your current web page.

## Usage

So the basic setup looks something like this:

```

let modal = new Modal();

modal.setActionShow(function () {
    modal.setTitle('The text you want to be set as title.');
});

// modal.addContent(<HTMLElement that will be display in the modal>);
// modal.setBottom(<HTMLElement that will be display in bottom of the modal>);

document.addHTMLElement(modal.out());

```

## Structure

library:
- [window.Modal](https://github.com/energia-source/widget-modal/tree/main/li)
- [window.Modal.Placeholder](https://github.com/energia-source/widget-modal/tree/main/li)
- [window.Modal.Preloader](https://github.com/energia-source/widget-modal/tree/main/li)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-xkr/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-xkr/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
