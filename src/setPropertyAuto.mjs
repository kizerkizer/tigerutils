export default function setPropertyAuto (object, path, value) {
  path = path.trim().replace(/^\./, '');
  if (!/^([a-zA-Z0-9_]+\.)*[a-zA-Z0-9_]+$/.test(path)) {
    throw new Error('invalid path');
  }
  if (!object) {
    return false;
  }
  path = path.split('.');
  let current = object,
      i = 0;
  while (i < path.length - 1) {
    if (!current[path[i]]) {
      current[path[i]] = {};
    }
    current = current[path[i]];
    i++;
  }
  current[path[i]] = value;
}
