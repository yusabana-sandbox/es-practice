ECMAScript practice
=======

* initialize

```
ndenv install v6.2.2
ndenv local v6.2.2
ndenv rehash

npm install --save-dev babel-cli babel-preset-es2015 eslint
mkdir {src,dist}
```

* add `.babelrc`

* add `.eslintrc`

* add npm-script `build` and `watch`

* You can write src/app.js. After that, You can do "npm run build". Then dist/app.js will be built.

* You can execute "node dist/app.js"

### es2015

* この資料でes2015関連参考になる http://yoshiko-pg.github.io/slides/20160512-frontend-biz/
  * stage0,1までは入れてもいいかもね


## eslint

references for parserOptions, etc.
http://eslint.org/docs/user-guide/configuring#specifying-parser-options
