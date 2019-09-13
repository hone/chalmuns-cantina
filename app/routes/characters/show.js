import Route from '@ember/routing/route';
import { set } from '@ember/object';
import characters from 'chalmuns-cantina/data/cards';

export default Route.extend({
  model(params) {
    let character = characters.find(character => {
      return character.slug === params.character_slug;
    });

    return {
      character: character,
      deck: this.shuffle(Object.assign([], character.cards)),
      currentCard: null,
    };
  },

  shuffle(cards) {
    let shuffledCards = [];
    let numOfCards = cards.length;

    for (let i = 0; i < numOfCards; i++) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      let card = cards[randomIndex];
      shuffledCards.push(card);
      cards.splice(randomIndex, 1);
    }

    cards = shuffledCards;

    return shuffledCards;
  },

  actions: {
    drawCard() {
      let model = this.modelFor('characters.show');
      let card = model.deck.shift();

      set(model, 'currentCard', card);
      model.deck.push(card);
      set(model, 'deck', model.deck);
    },
  },
});
