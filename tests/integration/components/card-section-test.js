import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | card-section', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.title = "Title!";
    this.subtitle = "Subtitle!";
    this.steps = ["foo", "bar", "baz"];

    await render(hbs`<CardSection @title={{this.title}} @subtitle={{this.subtitle}} @steps={{this.steps}}/>`);

    assert.equal(find('[data-test-title]').textContent.trim(), this.title);
    assert.equal(find('[data-test-subtitle]').textContent.trim(), this.subtitle);
    assert.equal(findAll('[data-test-step]').length, 3);
  });

  test("it doesn't render the subtitle", async function(assert) {
    this.title = "Title!";
    this.steps = ["foo", "bar", "baz"];

    await render(hbs`<CardSection @title={{this.title}} @steps={{this.steps}}/>`);

    assert.equal(find('[data-test-title]').textContent.trim(), this.title);
    assert.notOk(find('[data-test-subtitle]'));
    assert.equal(findAll('[data-test-step]').length, 3);
  });
});
