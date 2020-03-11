const goods = [];

const category = ['Milk', 'Vegetables', 'Grocery', 'Bread'];
const packing = ['kg', 'l', 'package', 'item'];
function formGoods() {
  for (let i = 0; i < 100; i++) {
    const item = createGood();
    item.id = i;
    goods.push(item);
  }
}

function createGood() {
  return {
    category: category[getRandomNumber(0, category.length - 1)],
    packing: packing[getRandomNumber(0, category.length - 1)],
    label: getRandomString(getRandomNumber(4, 10)),
    in_cart: false,
    num: 0,
  };
}

function getRandomString(num = 10) {
  const ALPHABET = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_';
  const length = ALPHABET.length;
  let string = '';
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * length);
    string += ALPHABET[index];
  }
  return string;
}

function getRandomNumber(min, max = false) {
  if (!min && min !== 0) {
    return Math.random();
  }
  if (max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor(Math.random() * ++min);
}
formGoods();
export default goods;
