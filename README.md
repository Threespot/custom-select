# custom-select
Wraps select menus in a div so we can apply custom styling

Looks for all elements with class `js-custom-select` and wraps each one inside its own `<div>` so that it can be individually styled.

**For example:**
```html
<select class="js-custom-select">
  <option value="DC">DC</option>
  <option value="MD">MD</option>
  <option value="VA">VA</option>
</select>
```

**Becomes:**
```html
<div class="js-custom-select">
  <select>
    <option value="DC">DC</option>
    <option value="MD">MD</option>
    <option value="VA">VA</option>
  </select>
</div>
```

`custom-select` will **not** override other classes.

**For example:**
```html
<select class="js-custom-select my-class">
  <option value="DC">DC</option>
  <option value="MD">MD</option>
  <option value="VA">VA</option>
</select>
```

**Becomes:**
```html
<div class="js-custom-select">
  <select class="my-class">
    <option value="DC">DC</option>
    <option value="MD">MD</option>
    <option value="VA">VA</option>
  </select>
</div>
```
