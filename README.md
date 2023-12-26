# Svelte Boilerplate

Svelte Boilerplate is a project template for Svelte, designed to provide a starting point for your Svelte applications with a set of pre-configured tools and settings.

## Features

- Vite
- TypeScript
- Prettier
- ESLint
- Vitest
- Husky with pre-commit hooks for tests and linting

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fracegu/svelte-boilerplate.git
   ```

2. Change into the project directory:

   ```bash
   cd svelte-boilerplate
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development

To start the development server, run:

```bash
npm run dev
```

This will launch your Svelte application with hot module replacement (HMR) for a smooth development experience.

### Build

To build the production-ready bundle, use:

```bash
npm run build
```

The output will be available in the dist directory.

### Testing

Run tests using [Vitest](https://vitest.dev/):

```bash
npm test
```

### Code Formatting and Linting

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are configured for code formatting and linting. You can run:

```bash
npm run format
```

to format your code and:

```bash
npm run lint
```

to lint your code.

### Husky Pre-Commit Hooks

[Husky](https://typicode.github.io/husky/) is set up with pre-commit hooks to run tests and linting before each commit. This ensures that only well-formatted and passing code is committed.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated!

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
