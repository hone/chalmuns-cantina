import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | characters/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:characters/show');
    assert.ok(route);
  });
});
