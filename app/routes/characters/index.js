import Route from '@ember/routing/route';
import characters from 'chalmuns-cantina/data/cards';

export default Route.extend({
  model() {
    return characters;
  }
});
