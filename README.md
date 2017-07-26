# GoCN web
> GoCN forum frontend

### Structure

```ruby
|
+-- build             # webpack config file
+-- config            # project config file
+-- srv
|   +-- assets        # static files
|   +-- components    # vue common components
|   +-- css           # css file
|   +-- pages         # page component
|   +-- router        # vue-router file
|   +-- store         # vuex store
|   +-- app.vue       # vue entry
|   +-- main.js       # js entry
+-- test 
|   +-- e2e           # e2e test case
|   +-- unit          # unit test case
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


### Code style
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [eslint rule](.eslintrc.js)
* [code-style](docs/code-style.md)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

