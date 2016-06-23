PostCSS React Native Demo
===
Shows how you can use [postcss-react-native](https://github.com/jspears/postcss-react-native) in your app.


## Running
After installing postcss-react-native add to your package.json


```json

 "scripts": {
    "prn": "./postcss-react-native/bin/prn.js -w style -d dist"
    ...
  },
```
and run  prn to generate all your style classes.  They will be put into dist.
```$ npm run prn```

