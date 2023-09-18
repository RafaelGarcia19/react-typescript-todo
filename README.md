# React + TypeScript + Vite To-Do App

**Features:**

- Add, edit, and delete tasks
- Mark tasks as complete
- Filter tasks by status
- Persist task data to localStorage

**Getting started:**

1. Clone the repository:

``` bash
git clone https://github.com/your-username/react-typescript-vite-todo-app.git
```

2. Install the dependencies:

``` bash
npm install
# or
pnpm install
```

3. Start the development server:

``` bash
npm run dev
# or
pnpm dev
```

4. Open the to-do app in your browser at http://localhost:3307

Usage:

- To add a new task, enter the task name in the input field and click the "Add Task" button.
- To edit a task, click on the task name to open the edit form. Make your changes and click the "Save Task" button.
- To delete a task, click on the trash can icon next to the task name.
- To mark a task as complete, click on the checkbox next to the task name.
- To filter tasks by status, click on the "All", "Active", or "Completed" buttons at the top of the app.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Developed by [RafaelGarcia19][github-username]

[github-username]: https://github.com/RafaelGarcia19
