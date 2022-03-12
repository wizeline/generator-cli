# g (CLI)

 ## STEPS TO FOLLOW:
 -  Open Terminal and clone the project, you can use:
 > *git clone*
 -  Create ***generator.cli.config*** file in your user's Home directory, with the following structure:

```json
{
  "GeneratorURL": "http://localhost:4321",
  "applicationsPath": "/Users/<username>/repos/Applications",
  "forceMode": true,
  "currentApp": "Sample",
  "currentFrontend": "main"
}
```

 -  Change ***applicationsPath*** property to point to your Home directory.
 -  Go back to the terminal and install dependencies, using: 
 > *yarn install*
 -  Finally execute: 
 > *npm link*

## Commit with semantic-release conventions:
- fix Release:
  - fix: your commit message
- feature Release:
  - feat: your commit message
- breaking Release:
  - perf: your commit message <br />
  BREAKING CHANGE: Your explanation.
