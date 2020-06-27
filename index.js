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

//get halaman pertama_kabupaten
app.get('/kabupaten-first', (req, res) => {

  var sql = `SELECT * FROM kabupaten_tb`;
  var query = db.query(sql, (err, results2) => {
    if (err) throw err;
    res.render('view-kabupaten', { results2: results2 });
    console.log(results2);
  });
});
//get halaman provinsi_tb no4a
app.get('/provinsi_tb', (req, res) => {

  var sql = `SELECT * FROM provinsi_tb`;
  var query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.render('jawabanA', { results: results });
    console.log(results);
  });
});

//get halaman kabupaten_tb no4b
app.get('/kabupaten_tb', (req, res) => {

  var sql = `SELECT * FROM kabupaten_tb;`;
  var query = db.query(sql, (err, results2)=>{
    if (err) throw err;
    res.render('kabupaten', {results2:results2});
    console.log(results2);
  });
});

//get halaman pulau-tertentu no 4c
app.get('/pulau-tertentu', (req, res) => {

  var sql = `SELECT * FROM provinsi_tb WHERE provinsi_tb.pulau = "Jawa";`;
  var query = db.query(sql, (err, results)=>{
    if (err) throw err;
    res.render('pulauTertentu', {results:results});
    console.log(results);
  });
});

//post add provinsi
app.post("/add_provinsi", function(req, res) {
  let data = {nama: req.body.nama, diresmikan: req.body.diresmikan, photo: req.body.photo, pulau: req.body.pulau};
  let sql = "INSERT INTO provinsi_tb  SET?";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//post add kabupaten
app.post("/add_kabupaten", function(req, res) {
  let data = {Nama: req.body.Nama, Provinsi_id: req.body.provinsi_id, Diresmikan: req.body.Diresmikan, photo: req.body.photo};
  let sql = "INSERT INTO kabupaten_tb  SET? ";
  let query = db.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/kabupaten-first');
  });
});


//get detail provinsi
app.get("/provinsi/:id", function(req, res) {
    var province_id = req.params.id;
    let sql ='SELECT * FROM provinsi_tb where id = ?';
    let query = db.query(sql, province_id, (error, results) => { if(error) throw error;
        res.render("show", {results: results} );
        console.log(results);
    });
    });

//get detail kabupaten
app.get("/kabupaten/:id", function(req, res) {
    var kabupaten_id = req.params.id;
    let sql ='SELECT * FROM kabupaten_tb where id = ?';
    let query = db.query(sql, kabupaten_id, (error, results2) => { if(error) throw error;
        res.render("show-kabupaten", {results2: results2} );
        console.log(results2);
    });
    });
//route untuk update data provinsi
app.post('/update',(req, res) => {
  let sql = `UPDATE provinsi_tb SET id=${req.body.id},nama='${req.body.nama}', diresmikan='${req.body.diresmikan}', photo='${req.body.photo}', pulau='${req.body.pulau}' WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route untuk update data kabupaten
app.post('/update-kabupaten',(req, res) => {
  let sql = `UPDATE kabupaten_tb SET id=${req.body.id},Nama='${req.body.nama}', Diresmikan='${req.body.Diresmikan}', photo='${req.body.photo}', Provinsi_id=${req.body.provinsi_id} WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect("/kabupaten-first");
  });
});
 
//route untuk delete data provinsi
app.post('/delete-kabupaten',(req, res) => {
  let sql = `DELETE FROM kabupaten_tb WHERE id=${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/kabupaten-first');
  });
});

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
