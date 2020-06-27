function cetakPersegi(x, y){

  let str = "";

  for(let i = 1; i <= x; i++ ){
      for(let j = 1; j <= y; j++){
        if (i === 1 || i ===x){
          if (j===1 ||j === y || j === Math.ceil(y/2)){
            str = str.concat("*")
          } else{
            str = str.concat("#")
          }
        } else if( i === Math.ceil(x/2)){
          if (j === Math.ceil(y/2) ){
            str = str.concat("#")
          } else{
            str = str.concat("*")
          }
        } else{
          if (j === Math.ceil(y/2) ){
            str = str.concat("*")
          } else{
            str = str.concat("#")
          }
        }
      }
    str = str.concat("\n")
  }

 return console.log(str)
}

cetakPersegi(7,7);