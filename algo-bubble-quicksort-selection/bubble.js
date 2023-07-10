//! bubble sort consiste a comparer les valeurs 2 a 2 et les swapper si la valeur de gauche est plus grande que celle de droite


function bubbleSort(array)
{
  for( let i=0; i <array.length -1; i++){
    for (let j=0; j< array.length -1 -i; j++)
    {
      if(array[j] > array[j+1])
      {

        //? Swapper les valeurs
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp

        //? Autre methode pour swapper les valeurs
        /*//! [array[j], array[j+1]] = [array[j+1], array[j]]; */

      }
    } 
  }
  
  console.log(array);
}

bubbleSort([100,5,3,8,2,1,4])



//! Facon de faire avec la methode sort
function bubbleSort2(array)
{
  console.log(array.sort((a,b) => a-b));

}

bubbleSort2([100,5,3,8,2,1,4])