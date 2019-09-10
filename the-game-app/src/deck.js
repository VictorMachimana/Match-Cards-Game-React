function shuffle(array) {
  /*---copy the array and shuttle copy instead--*/
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    "react",
    "bootstrap",
    "redux",
    "vue",
    "angular",
    "javascript",
    "ruby",
    "jquery"
  ].reduce((acc, type) => {
    /*---first --cards--in this array--*/
    acc.push({
      id: id++,
      type
    });
    /*---second --cards--as matching cards--*/
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return shuffle(cards);
}
