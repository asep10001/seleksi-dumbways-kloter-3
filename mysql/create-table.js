var db = require('./db-config')

let sql = `CREATE TABLE NmMApBVao4.kabupaten_tb
( id INT NOT NULL AUTO_INCREMENT, Nama TEXT NOT NULL , Provinsi_id INT NOT NULL , Diresmikan TEXT NOT NULL , photo TEXT NOT NULL, PRIMARY KEY(id) )
ENGINE = InnoDB`;

	db.query(sql, (err, result)=>{
		if(err) throw err;
		console.log("Table created");

	});