import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export default helper(function characterBackground([image]) {
  return htmlSafe(`background-image: url(${image})`);
});
