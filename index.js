const express=require('express');
const app=express();
const PORT=process.env.PORT ||3000
var path = require('path');
 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})