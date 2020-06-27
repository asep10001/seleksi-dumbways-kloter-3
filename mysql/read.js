var db = require("./db-config");

db.getConnection(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM provinsi_tb";
      db.query(sql, function (err, result) {
      if (err) throw err;
      // gunakan perulangan untuk menampilkan data
      console.log(`ID \t NAMA \t\t\t\t DIRESMIKAN \t\t\t\t PHOTO \t\t\t PULAU`);
      console.log(`---------------------------------------------------------------------------`);
      result.forEach(provinsi_tb => {
          console.log(`${provinsi_tb.id} \t ${provinsi_tb.nama} \t\t ${provinsi_tb.diresmikan} \t\t\t ${provinsi_tb.photo} \t\t\t\t ${provinsi_tb.pulau}`);
      });
    });
  }
);