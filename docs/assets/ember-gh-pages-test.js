"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ember-gh-pages-test/app', ['exports', 'ember', 'ember-gh-pages-test/resolver', 'ember-load-initializers', 'ember-gh-pages-test/config/environment'], function (exports, _ember, _emberGhPagesTestResolver, _emberLoadInitializers, _emberGhPagesTestConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberGhPagesTestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberGhPagesTestConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberGhPagesTestResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberGhPagesTestConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-gh-pages-test/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-gh-pages-test/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberGhPagesTestConfigEnvironment) {

  var name = _emberGhPagesTestConfigEnvironment['default'].APP.name;
  var version = _emberGhPagesTestConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-gh-pages-test/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-gh-pages-test/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-gh-pages-test/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-gh-pages-test/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberGhPagesTestConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberGhPagesTestConfigEnvironment['default'].APP.name, _emberGhPagesTestConfigEnvironment['default'].APP.version)
  };
});
define('ember-gh-pages-test/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-gh-pages-test/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-gh-pages-test/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-gh-pages-test/initializers/export-application-global', ['exports', 'ember', 'ember-gh-pages-test/config/environment'], function (exports, _ember, _emberGhPagesTestConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberGhPagesTestConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberGhPagesTestConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberGhPagesTestConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-gh-pages-test/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-gh-pages-test/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-gh-pages-test/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-gh-pages-test/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-gh-pages-test/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-gh-pages-test/router', ['exports', 'ember', 'ember-gh-pages-test/config/environment'], function (exports, _ember, _emberGhPagesTestConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberGhPagesTestConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('ember-gh-pages-test/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ember-gh-pages-test/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-gh-pages-test';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ember-gh-pages-test/app")["default"].create({"name":"ember-gh-pages-test","version":"0.0.0+285e2a67"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-gh-pages-test.map
