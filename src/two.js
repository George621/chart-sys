
// two.js
function two() {
  let elem = document.createElement('div');
  elem.innerHTML = '我是第二个文件出口';
  return elem;
}
document.getElementById('root').appendChild(two())