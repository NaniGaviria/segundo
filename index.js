const os = require('os');
const colors = require('colors');
const express = require('express');
const server =express();
var memoriatotal=(os.totalmem()/(1024*1024*1024)).toFixed(2);
var memorialibre=(os.freemem()/(1024*1024*1024)).toFixed(2);

server.get('/',function(req,res){
  res.send('<h1>Holi Grupo</h1> <br> Este equipo cuenta con '+memoriatotal+' GB. <br>Posee libre '+memorialibre+' GB libres.');
})
server.listen(3000,function(){
  console.log('Servidor iniciado en el puerto 3000 <br> Copia y pega esto en tu navegador: http://localhost:3000/'.yellow);
});
