import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | character-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.character = {
      name: "Boba Fett",
      slug: "boba-fett",
      image: "/splash/bobafett.jpg",
    };
    await render(hbs`<CharacterCard @character={{this.character}} />`);

    assert.ok(find('[data-test-character-button]').textContent, "Boba Fett");
  });
});
