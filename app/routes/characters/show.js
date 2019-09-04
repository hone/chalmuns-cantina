import Route from '@ember/routing/route';
import { set } from '@ember/object';
import characters from 'chalmuns-cantina/data/cards';

export default Route.extend({
  model(params) {
    let character = characters.find(character => {
      return character.slug === params.character_slug
    });

    return {
      character: character,
      deck: Object.assign([], character.cards),
      currentCard: null,
    };
  },

  actions: {
    drawCard() {
      let model = this.modelFor('characters.show');

      // if deck is empty, refill deck
      if (model.deck.length === 0) {
        model.deck = Object.assign([], model.character.cards);
      }

      let randomIndex = Math.floor(Math.random() * model.deck.length);
      set(model, 'currentCard', model.deck[randomIndex]);
      model.deck.splice(randomIndex, 1);
      set(model, 'deck', model.deck);
    },
  },
});
