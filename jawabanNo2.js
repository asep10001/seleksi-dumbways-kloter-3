
function sortAngka(array){

  function tukar(array, ind_1, ind_2){
    var temp = array[ind_1];
    array[ind_1] = array[ind_2];
    array[ind_2] = temp;
  }

    var len = array.length,
        i, j, pembatas;

    for (i=0; i < len; i++){
        for (j=0, pembatas=len-i; j < pembatas; j++){
            if (array[j] > array[j+1]){
                tukar(array, j, j+1);
            }
          //untuk mengecek
          // console.log(array);
        
        }
        // batas for loop pertama
          // console.log(`====`)
    }

    return array;
}

// contoh penggunaan
var array = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21,];
sortAngka(array);

