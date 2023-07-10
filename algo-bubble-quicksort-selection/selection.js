//! Selection Sort consiste a placer le plus petit element a gauche et le plus grand a droite a chaque iteration 

function selectionSort(array)
{
  for(let i=0; i<array.length -1 ; i++)

  {
//? Trouver le plus petit element
    let minIndex = i
    for(let j=i+1; j<array.length; j++)
    {
      if(array[j] < array[minIndex])
      {
        minIndex = j
      }
    }
    //? Swapper les valeurs
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
console.log(array);
  }
}

selectionSort([100,5,3,8,2,1,4])