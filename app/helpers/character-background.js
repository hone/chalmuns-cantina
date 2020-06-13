import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

function backgroundImageValue(image) {
  let value;

  if (image !== 'none') {
    value = `url(${image})`;
  } else {
    value = 'none';
  }

  return value;
}

export default helper(function characterBackground([input]) {
  let images;

  if (Array.isArray(input)) {
    images = input;
  } else {
    images = [input];
  }

  return htmlSafe(
    `background-image: ${images.map((i) => backgroundImageValue(i)).join(',')}`
  );
});
