import { SampleReadme, typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'demo',
  projenrcTs: true,

  deps: ['axios'],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['typescript', 'jest'],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addTask('start', {
  exec: 'ts-node src/index.ts',
});

new SampleReadme(project, {
  contents: `
    # Sample Project Name

    > This project is generated using projen.
  `
});

project.gitignore.addPatterns('dist/', 'node_modules/');

project.synth();