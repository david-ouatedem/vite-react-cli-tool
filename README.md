
# vite-react-cli-tool

`vite-react-cli-tool` is a command-line tool designed to scaffold React projects with a predefined hexagonal architecture. It sets up essential folders and integrates boilerplate code to set up common dependencies like Tailwind CSS and Redux.

## Features

- **Scaffold React projects** with a Vite + React template.
- **Hexagonal architecture** setup with standard folders: `assets`, `components`, `hooks`, `pages`, `services`, `store`, `styles`, and `utils`.
- **Dependency setup** for Tailwind CSS and Redux (in future versions).

## Installation

To install `vite-react-cli-tool` globally, make sure to first build the TypeScript files to JavaScript by running:

```bash
npm run build
```

Then, link the package globally:

```bash
npm link
```

After linking, you should be able to use `vbc` from anywhere on your system.

Alternatively, you can install directly from npm (once published):

```bash
npm install -g vite-react-cli-tool
```

## Usage

To create a new React project with the hexagonal architecture:

```bash
vbc create <project-name>
```

Replace `<project-name>` with the desired name of your project.

Example:

```bash
vbc create my-new-app
```

This command will:
- Initialize a new React project in a folder named `my-new-app`.
- Set up the project structure with pre-defined folders for assets, components, hooks, etc.

## Project Structure

When you create a new project using `vite-react-cli-tool`, it generates the following structure:

```
my-new-app/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── utils/
└── ...
```

## Commands

### `create <project-name>`

Scaffold a new React project with a hexagonal architecture.

Example:

```bash
vbc create my-new-app
```

This initializes the project with a Vite + React template and sets up the project structure as described above.

## Contributing

If you wish to contribute to `vb-cli`, follow these steps:

1. Fork this repository.
2. Clone your forked repository.
3. Make your changes and commit them.
4. Create a pull request.

### Development Setup

To work on the tool locally:

1. Clone the repo:

   ```bash
   git clone <your-fork-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript files:

   ```bash
   npm run build
   ```

4. Link the package locally to test it:

   ```bash
   npm link
   ```

5. Test the tool by running `vbc` commands from anywhere on your system.

## License

This project is licensed under the ISC License.
