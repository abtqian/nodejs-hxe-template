var express = require('express');
var hdb    = require('hdb');
 
var router = express.Router();
var client = hdb.createClient({
  host     : '35.185.237.5',
  port     : 39013,
  user     : 'SYSTEM',
  password : 'bemT4amt'
});
 
var sql = "select * from m_database";
 
/* GET home page. */
router.get('/', function(req, res, next) {
  client.connect(function (err) {
  if (err) {
          return console.error('Connect error', err);
  }
 
   console.log("Connected");
   client.exec(sql, function(err, rows) {
      res.render('index', { title: 'Eclipse Che Template (Node.js) for HXE', datarows: rows });
    });
    client.end();
    if (err) {
      return console.error('Execute error:', err);
    }
  });
});
 
module.exports = router;

