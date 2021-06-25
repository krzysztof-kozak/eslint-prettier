>**ALL CREDIT GOES TO [PRZEPROGRAMOWANI](https://www.youtube.com/watch?v=u2yUxhzpht4&lc=Ugz2v9W_XVRS6HbJi-p4AaABAg.9Ox94V9p5359Oy1FEpOSPT&ab_channel=Przeprogramowani)**


# Eslint + prettier combo.

These config files allow to use [eslint](https://eslint.org/) with a preset styleguide from [Airbnb](https://airbnb.io/projects/javascript/).

## How to use?
1. Copy **.eslint.js** and **package.json** to the root folder of your project.
2. Initiale an npm project.

        npm init -y

2. Install dependencies.

        npm install

3. Install [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) vscode plugin.

## Dependencies used:
- eslint
- prettier
- eslint-config-airbnb-base
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-config-prettier

## Recommended options for the vscode config file:
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "eslint.format.enable": true,
    "eslint.lintTask.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.validate": ["javascript", "html"],
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true},

To open vscode config file press **controll + shift + p** and type ***Preferences: Open Settings(JSON)***