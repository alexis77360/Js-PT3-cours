//! Quick Sort consiste a placer le pivot a sa bonne place et a gauche les valeurs plus petites et a droite les valeurs plus grandes

function quickSort(array) {


  //? Si l'array a 1 element ou moins, on le retourne
  if (array.length <= 1) {

    return array
  }
  

  //? Trouver le pivot ( le dernier element de l'array)
  const pivot = array[array.length - 1]

  //? Trouver les valeurs plus petites que le pivot
  let arrLeft = []
  //? Trouver les valeurs plus grandes que le pivot
  let arrRight = []

  for (let i = 0; i < array.length - 1; i++) {
    //? Si la valeur est plus petite que le pivot, push dans l'array de gauche
    //? Sinon push dans l'array de droite
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i])
  }


  //? Si les arrays de gauche et de droite ont plus d'un element, on les trie
  if (arrLeft.length > 0 && arrRight.length > 0) {
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)]
  } else if (arrLeft.length > 0) {
    return [...quickSort(arrLeft), pivot]
  } else {
    return [pivot, ...quickSort(arrRight)]
  }

}

console.log(quickSort([100, 5, 3, 8, 2, 1, 4, 98, 225, 2444, 33654, 11, 256, 321]));