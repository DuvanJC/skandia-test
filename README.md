# SkandiaTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1.

## Development server

To start a local development server, run:

```bash
ng serve

Recommended Command
To avoid potential errors related to Vite integration, run the project with the following command:

ng s -o --no-hmr

Command Details:
ng serve: Starts the development server.
-o or --open: Automatically opens the default browser with the application.
--no-hmr: Disables Hot Module Replacement (HMR), which prevents errors such as:

Error: [vite] cannot find entry point module ...
Note: This error may occur due to conflicts between Vite and Angular when HMR is enabled. Using --no-hmr resolves the issue by forcing a full-page reload instead of dynamically reloading modules.
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Styles 
This project uses Bootstrap as the primary framework to simplify and standardize the styling of components. Bootstrap provides a wide range of pre-designed classes for layout, typography, forms, buttons, and other UI elements, allowing for faster and more consistent development.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
