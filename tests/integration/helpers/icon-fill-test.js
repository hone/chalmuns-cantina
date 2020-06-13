import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | icon-fill', function (hooks) {
  setupRenderingTest(hooks);

  test('it fills in the credits icon', async function (assert) {
    this.inputValue = 'Spend 8k to gain 1 fame.';

    await render(hbs`{{icon-fill this.inputValue}}`);

    assert.equal(
      this.element.innerHTML,
      'Spend <i class="icon-credits"></i> 8,000 to gain 1 fame.'
    );
  });

  test('it fills in the negative icon', async function (assert) {
    this.inputValue =
      'If (-) reputation matching a patrol in this space, encounter that patrol.';

    await render(hbs`{{icon-fill this.inputValue}}`);

    assert.equal(
      this.element.innerHTML,
      'If <i class="icon-negative"></i> reputation matching a patrol in this space, encounter that patrol.'
    );
  });

  test('it replaces @', async function (assert) {
    this.inputValue = 'If @ job destination, complete it.';

    await render(hbs`{{icon-fill this.inputValue}}`);

    assert.equal(this.element.innerHTML, 'If at job destination, complete it.');
  });

  test('it bolds caps', async function (assert) {
    this.inputValue =
      'If @ cargo destination, deliver it. If cargo is ILLEGAL, ship suffers 2 damage.';

    await render(hbs`{{icon-fill this.inputValue}}`);

    assert.equal(
      this.element.innerHTML,
      'If at cargo destination, deliver it. If cargo is <strong>ILLEGAL</strong>, ship suffers 2 damage.'
    );
  });

  test("it doesn't bold caps less than 3 characters", async function (assert) {
    this.inputValue = 'Then shuffle this AI card back into the AI deck.';

    await render(hbs`{{icon-fill this.inputValue}}`);

    assert.equal(
      this.element.innerHTML,
      'Then shuffle this AI card back into the AI deck.'
    );
  });
});
