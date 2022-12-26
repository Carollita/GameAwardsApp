# Game Awards App

App for ranking games developed in FullStack Labs promoted by Digital Innovation One.

![React](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### ⚙️ Requirements
[![VS Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com)
[![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://docs.npmjs.com)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev)

Click in the upper badges to be redirected for download and documentatios websites.

#### To checkout Node JS Version:
```
node -v
```

#### Install Expo
```
npm install expo-cli --global
or
npm i -g expo-cli
```


[To fix npm error self signed certificate in certificate chain](https://stackoverflow.com/questions/29141153/nodejs-npm-err-code-self-signed-cert-in-chain)

```
npm set strict-ssl false
```

### 📁 Create and Config Project
```
expo init GameAwardsApp --npm
```

Select option:
```
blank (TypeScript)  same as blank but with TypeScript configuration
```

[Install React Navegation](https://reactnavigation.org/docs/getting-started/)

```
npm install --save react-navigation
react-native-safe-area-context
```

[To fix npm ERR! 404 Not Found - GET https://registry.npmjs.org/@react-navegation%2Fnative - Not found](https://stackoverflow.com/questions/48215374/react-navigation-error-on-npm-install)

```
npm install react-navigation
npm install @react-navegation/native
```

Add Tab navigation
```
npm install @react-navigation/bottom-tabs
```
Run Project
```
expo start
```

### 💻 Technologies / Tools

#### IDE
```
VS Code
```

#### Front-end
```
React Native
Node JS
NPM
Expo
React Navigation
- Tab navigation
```