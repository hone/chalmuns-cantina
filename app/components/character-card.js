import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CharacterCard extends Component {
  characterBackground = null;
  characterHoverBackground = null;

  @tracked
  background = null;

  constructor(owner, args) {
    super(owner, args);
    this.characterBackground = args.character.image;
    this.characterHoverBackground = args.character.hoverImage;
    this.handleMouseLeave();
  }

  @action
  handleMouseEnter() {
    this.background = this.characterHoverBackground;
  }

  @action
  handleMouseLeave() {
    this.background = this.characterBackground;
  }
}
