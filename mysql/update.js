var db = require("./db-config");

db.getConnection(function(err) {
    if (err) throw err;
    
    // kita akan mengubah alamat Starbucks
    let sql = `UPDATE kabupaten_tb
               SET 
               photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lambang_Kabupaten_Bandung.png/600px-Lambang_Kabupaten_Bandung.png"
               WHERE id=1`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});