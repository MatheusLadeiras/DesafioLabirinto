// node app.js
const express = require('express')
  const app = express()
  const port = 3000

  var path = require('path');
  //es.sendFile(path.resolve(__dirname+'/../index.html'));

  app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname + '/../index.html')); //Funciona mas sem css ou js
    //res.sendFile(__dirname + '' ) //__dirname + '/index.html'
    //res.sendFile('index.html', {root: '../../desafioLabirinto'}); //Funciona mas sem css ou js
    res.sendFile(__dirname + '/index.html') //Funciona completo mas só se tirar as coisas da pasta js
  })

  app.use(express.static('.'))

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})