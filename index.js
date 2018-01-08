'use strict';
var selector = 'js-custom-select';
var selects = document.querySelectorAll('.' + selector);

for ( var i=0, len=selects.length; i<len; i++ ) {
  var el = selects[i];
  el.classList.remove(selector);
  // Wrap select in div and apply class from select element
  // https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
  var wrapper = document.createElement('div');
  wrapper.className = selector;
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
