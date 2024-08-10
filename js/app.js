// ativar no terminal com "node app.js" na pasta js
const express = require('express')
  const app = express()
  const port = 3000

  var path = require('path');
  //es.sendFile(path.resolve(__dirname+'/../index.html'));

  app.get('/', (req, res) => {
    var parentDir = path.normalize(__dirname+"/.."); // Outra alternativa uma pasta atrás: /../..   '/DesafioLabirinto/html/index.html'
    res.sendFile(parentDir+'/html/index.html');
    app.use(express.static("."));
    /* This also dont work
    res.sendFile(parentDir+'/css/index.css');
    res.sendFile(parentDir+'/js/index.js');
    */
    
    //Funciona mas sem css ou js que espera esse caminho "http://localhost:3000/css/index.css"
  

    //res.sendFile(path.resolve(__dirname + '../html/index.html')); //Funciona mas sem css ou js
    //res.sendFile(__dirname + '' ) //__dirname + '/index.html'
    //res.sendFile('html/index.html', {root: '../../desafioLabirinto'}); //Funciona mas sem css ou js que espera esse caminho "http://localhost:3000/css/index.css"
    //res.sendFile(__dirname + '/index.html') //Funciona completo mas só se tirar as coisas da pasta js e html
    //path.join(__dirname, '..', 'html', 'index.html') //Testar algo com isso mas tem que ver como isso seria referenciado pelo res
  })

  app.use(express.static('.'))

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})