import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | character-background', function(hooks) {
  setupRenderingTest(hooks);

  test('returns background style tag for none', async function(assert) {
    await render(hbs`<div style={{character-background 'none'}}></div>`);

    assert.equal(find('div').getAttribute('style'), 'background-image: none');
  });

  test('returns background style tag for a url', async function(assert) {
    await render(hbs`<div style={{character-background '/foo/bar.png'}}></div>`);

    assert.equal(find('div').getAttribute('style'), 'background-image: url(/foo/bar.png)');
  });

  test('returns background for mulitple images', async function(assert) {
    this.inputValue = ['/foo/bar.png', '/foo/baz.png'];
    await render(hbs`<div style={{character-background this.inputValue}}></div>`);

    assert.equal(find('div').getAttribute('style'), 'background-image: url(/foo/bar.png),url(/foo/baz.png)');
  });
});
