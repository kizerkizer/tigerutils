import setPropertyAuto from '../src/setPropertyAuto.mjs';

let object = {};

setPropertyAuto(object, 'foo.bar.yellow', {
  green: 'yes'
});

console.log(object.foo.bar.yellow.green === 'yes');

try {
  setPropertyAuto(object, 'l9**(&#$m,cxvOUIJKZ', 'foo');
} catch (e) {
  console.log(e.message === 'invalid path');
}
