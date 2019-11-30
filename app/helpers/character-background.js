import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export default helper(function characterBackground([image]) {
  let value;

  if (image !== 'none') {
    value = `url(${image})`;
  } else {
    value = 'none';
  }
  return htmlSafe(`background-image: ${value}`);
});
