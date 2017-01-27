define('ember-gh-pages-test/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-gh-pages-test/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-gh-pages-test/tests/helpers/start-app', 'ember-gh-pages-test/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberGhPagesTestTestsHelpersStartApp, _emberGhPagesTestTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberGhPagesTestTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberGhPagesTestTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-gh-pages-test/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/helpers/resolver', ['exports', 'ember-gh-pages-test/resolver', 'ember-gh-pages-test/config/environment'], function (exports, _emberGhPagesTestResolver, _emberGhPagesTestConfigEnvironment) {

  var resolver = _emberGhPagesTestResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberGhPagesTestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberGhPagesTestConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-gh-pages-test/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/helpers/start-app', ['exports', 'ember', 'ember-gh-pages-test/app', 'ember-gh-pages-test/config/environment'], function (exports, _ember, _emberGhPagesTestApp, _emberGhPagesTestConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberGhPagesTestConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberGhPagesTestApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-gh-pages-test/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-gh-pages-test/tests/test-helper', ['exports', 'ember-gh-pages-test/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberGhPagesTestTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberGhPagesTestTestsHelpersResolver['default']);
});
define('ember-gh-pages-test/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-gh-pages-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
