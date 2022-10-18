# electron_webpack_threejs

## how to create


Initialise an npm project :
```
touch package.json
npm init -y
```

Edit `package.json` by replacing the scripts field with the following :
```
 "scripts": {
   "build": "webpack",
   "serve": "webpack-dev-server"
 },
```

Install webpack and it’s commandline interface :
```
npm i -D webpack wepack-cli webpack-dev-server
```

Install the html-webpack-plugin
```
npm i -D webpack wepack-cli html-webpack-plugin
```

Install
```
npm install
```


Run
```
npm run serve
```


Reference : https://abi-web-app-documentation.readthedocs.io/en/latest/three/tutorial_2/threejs_with_webpack.html
