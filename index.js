'use strict';
var selector = 'js-custom-select';
var selects = document.querySelectorAll('.' + selector);

/*
  * Finds all elements with a class of 'js-custom-select'
  * and wraps them in a div so the select menus can be
  * more easily styled, since selects don't support :before/:after psuedo elements.
  * Inspired by http://www.456bereastreet.com/archive/201111/an_accessible_keyboard_friendly_custom_select_menu/
*/

class CustomSelect {
  constructor(el) {
    this.el = selects;
    el.classList.remove(selector);
    // Wrap select in div and apply class from select element
    // https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
    var wrapper = document.createElement('div');
    wrapper.className = selector;
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
}

for ( var i=0, len=selects.length; i<len; i++ ) {
  new CustomSelect(selects[i]);
  //create a new custom select for each select menu
}

export default CustomSelect;
