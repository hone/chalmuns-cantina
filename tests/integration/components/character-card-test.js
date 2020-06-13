import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | character-card', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.character = {
      name: 'Boba Fett',
      slug: 'boba-fett',
      image: '/splash/bobafett.jpg',
      hoverImage: '/splash/bobafett-color.jpg',
    };
  });

  test('it renders', async function (assert) {
    await render(hbs`<CharacterCard @character={{this.character}} />`);

    assert.ok(find('[data-test-character-button]').textContent, 'Boba Fett');
  });

  test('changes background on mouse hover', async function (assert) {
    await render(hbs`<CharacterCard @character={{this.character}} />`);
    await triggerEvent('[data-test-index-card]', 'mouseenter');

    assert.equal(
      find('[data-test-index-card]').getAttribute('style'),
      `background-image: url(${this.character.hoverImage})`
    );
  });

  test('changes background when mouse leaves', async function (assert) {
    await render(hbs`<CharacterCard @character={{this.character}} />`);
    await triggerEvent('[data-test-index-card]', 'mouseenter');
    await triggerEvent('[data-test-index-card]', 'mouseleave');

    assert.equal(
      find('[data-test-index-card]').getAttribute('style'),
      `background-image: url(${this.character.image})`
    );
  });
});
