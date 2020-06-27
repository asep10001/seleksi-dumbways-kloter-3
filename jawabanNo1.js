function hargaBarang (kualitasBarang, qty){
  let err = "";
  let harga = 0;
  //jika kualitasBarang A harga 4550 per barang,
  if(kualitasBarang.toUpperCase() === "A"){
    harga = 4550 * qty;
    //jika qty lebih besar dari 13
    if(qty > 13){
      //harga di kurangi 231 per qty
      var diskon = 231*qty;
      var setelahDiskon = harga - (diskon);
      //membuat error handling
    }else if(qty==0){
      err =`Jumlah Barang tidak Boleh Kosong`;
    }else{
      err = `Maaf Anda Memasukan Jumlah Barang yang Salah!`;
    } 
    //jika kualitasBarang B harga 5330 per barang,
  } else if (kualitasBarang.toUpperCase() === "B"){
    harga = 5330 * qty;
    //jika qty lebih besar dari 7
    if (qty>7){
      //diskon 23% dari total harga
      diskon = harga*23/100;
      setelahDiskon = harga - (diskon);
      //membuat error handling
    }else if(qty===0){
      err = `Jumlah Barang tidak Boleh Kosong`;
    }else{
      err = `Maaf Anda Memasukan Jumlah Barang yang Salah!`;
    }
  } else if (kualitasBarang.toUpperCase() === "C"){
    harga = 8653 * qty;
    //jika qty lebih besar dari 7
    if (qty){
      //diskon 23% dari total harga
      diskon = `Maaf tidak ada Promo untuk Barang "C"`;
      setelahDiskon = harga;
      //membuat error handling
    }else if(qty==0){
      err = `Jumlah Barang tidak Boleh Kosong!`;
    }else{
      err = `Maaf Anda Memasukan Jumlah Barang yang Salah!`;
    }
      //error handling untuk kualitasBarang
  } else{
      err = `Maaf barang yang anda minta tidak ditemukan!`;
    }
  if((kualitasBarang.toUpperCase() === "A" || kualitasBarang.toUpperCase() === "B" || kualitasBarang.toUpperCase() === "C") && (typeof(qty) === "number" && qty !== 0)){
  console.log(`==========================================`); 
  console.log(`Total harga barang untuk barang "${kualitasBarang.toUpperCase()}": ${harga}`);
  console.log(`Potongan: ${diskon}`);
  console.log(`Total yang harus dibayar: ${setelahDiskon}`);
  console.log(`==========================================`);
  } else {
    console.log(`==========================================`);
    console.log(err);
    console.log(`==========================================`);
  }
  
  
}

//contoh penggunaan dengan kualitasBarang A, B dan C
hargaBarang("a", 14);
hargaBarang("b", 8);
hargaBarang("c", 10);

//contoh kasus dengan error
//diluar dari kualitasBarang yang tersedia
hargaBarang("d", 2);
//qty bukan merupakan number
hargaBarang("a", "b");
//jumlah qty 0
hargaBarang("b", 0);

