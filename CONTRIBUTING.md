## Getting Started

1. Clone the repo

	```
	git clone git@github.com:MethodExists/react-component-template.git MYCOMPONENT
	```
1. Reset git history
	```
	cd MYCOMPONENT
	rm -rf .git
	git init
	```
1. Update `package.json`
	- Replace `MYCOMPONENT` to your component name everywhere in the file
	- Provide `description`
	- Inspect `peerDependencies` and remove those you’ll not use
1. Update `README.md`
	- Provide description of your component
	- Provide usage and examples
	- Provide API
1. Setup Demo site `demo/src/index.js`
	- Render your component inside a `Card`
	- Add as many cards as you need for demo different use cases
	- **Make sure you install libs used in demo as dev-dependency.** So they will not leak into your component’s package.


## Installation

- Running `npm install` in the components's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Developing


### Styles

- Prefix class names with component name to avoid collisions with client’s styles.

- Expose `className` and `style` props to allow to provide custom class name and styles.

- Don't use CSS Modules unless you know how to make work such component in other projects.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm.

- `npm run clean` will delete built resources.

## Publishing

- `npm run patch` will bump patch version push new release tag to github and publish to npm.

- `npm run minor` will bump minor version push new release tag to github and publish to npm.

## Hooks

- Pre-commit hook checks staged files for lint errors.

- Pre-push hook checks all files for lint errors and make sure tests are passing.

- Pre-publish hook runs test and builds the module.

