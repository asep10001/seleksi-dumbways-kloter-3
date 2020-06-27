const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./mysql/db-config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');


//get halaman pertama
app.get('/', (req, res) => {

  var sql = `SELECT * FROM provinsi_tb`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('view', { results: results });
    console.log(results);
  });
});

//get halaman provinsi_tb
app.get('/provinsi_tb', (req, res) => {

  var sql = `SELECT * FROM provinsi_tb`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('jawabanA', { results: results });
    console.log(results);
  });
});

//get halaman kabupaten_tb
app.get('/kabupaten_tb', (req, res) => {

  var sql = `SELECT * FROM kabupaten_tb;`;
  var query = db.query(sql, (err, results2)=>{
    if (err) throw err;
    res.render('kabupaten', {results2:results2});
    console.log(results2);
  });
});

//get halaman pulau-tertentu
app.get('/pulau-tertentu', (req, res) => {

  var sql = `SELECT * FROM provinsi_tb WHERE provinsi_tb.pulau = "Jawa";`;
  var query = db.query(sql, (err, results)=>{
    if (err) throw err;
    res.render('pulauTertentu', {results:results});
    console.log(results);
  });
});

//post save provinsi
app.post("/add_provinsi", function(req, res) {
  let data = {nama: req.body.nama, diresmikan: req.body.diresmikan, photo: req.body.photo, pulau: req.body.pulau};
  let sql = "INSERT INTO provinsi_tb  SET?";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//get detail provinsi
app.get("/provinsi/:id", function(req, res) {
    var province_id = req.params.id;
    let sql ='SELECT provinsi_tb.nama as "Nama Provinsi", provinsi_tb.diresmikan as "Tanggal Peresmian", provinsi_tb.photo as "Lambang", provinsi_tb.pulau as "Terletak di Pulau", kabupaten_tb.nama as "Nama Kabupaten" FROM provinsi_tb INNER JOIN kabupaten_tb ON kabupaten_tb.Province_id = ?';
    let query = db.query(sql, province_id, (error, results) => { if(error) throw error;
        res.render("show", {results: results} );
        console.log(results);
    });
    });

//get detail provinsi
app.get("/provinsi/:id", function(req, res) {
    var province_id = req.params.id;
    let sql ='SELECT * FROM kabupaten_tb where Provinsi_id = ?';
    let query = db.query(sql, province_id, (error, results3) => { if(error) throw error;
        res.render("show", {results3: results3} );
        console.log(results3);
    });
    });
//route untuk update data
app.post('/update',(req, res) => {
  let sql = `UPDATE provinsi_tb SET id=${req.body.id},nama='${req.body.nama}', diresmikan='${req.body.diresmikan}', photo=${req.body.photo}, pulau=${req.body.pulau} WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/provinsi/:id');
  });
});
 
//route untuk delete data
app.post('/delete',(req, res) => {
  let sql = `DELETE FROM provinsi_tb WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
