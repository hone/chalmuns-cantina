import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';


export default helper(function iconFill([string]) {
  let iconString = string.replace(/([\d])k/g, function(_, credits) {
    return `<i class="icon-credits"></i> ${credits},000`;
  }).replace(/\(-\)/g, function() {
    return `<i class="icon-negative"></i>`;
  }).replace(/@/, "at").replace(/([A-Z][A-Z]{3,})/g, function(_, word) {
    return `<strong>${word}</strong>`;
  });

  return htmlSafe(iconString);
});
