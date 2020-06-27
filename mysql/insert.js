var db = require("./db-config");

db.getConnection(function(err) {
    if (err) throw err;
    
    let sql = 
    `INSERT INTO provinsi_tb (nama, diresmikan, photo, pulau) 
    VALUES ("Sumatera Barat", "1 Oktober 1945", 'https://upload.wikimedia.org/wikipedia/commons/6/62/Coat_of_arms_of_West_Sumatra.svg', "Sumatera")`;
    `INSERT INTO kabupaten_tb (Nama, Provinsi_id, Diresmikan, photo) 
    VALUES ("Kabupaten Bandung", 1, "20 April 1641", "./assets/images/kabupaten-bandung.jpg")`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});