const express = require("express")
const app = express()
import path from 'path'
const multer = require('multer');

/**
 * Cria uma instância do middleware configurada
 * destination: lida com o destino
 * filenane: permite definir o nome do arquivo gravado
 */
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Primeiro parâmetro = erro
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        //Primeiro parâmetro = erro
        //Salvando com name do input e data atual
        /* cb(null, file.fieldname + '-' + Date.now()) */

        //Salvando com a mesma extensão do arquivo
        /* cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) */

        //Salvando com o mesmo nome do arquivo
        cb(null, file.originalname);
    }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

/**
* Colocar servidor no ar
*/
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, function () {
    console.log(`Servidor rodando na porta ${PORTA}`)
})



app.use('/publico', express.static(__dirname + '/publico'));
app.use('/uploads', express.static('./uploads'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));



app.get('/album', (req, res) => res.sendFile(path.join(__dirname,'/views/form-album-digital.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'/views/login.html')));
app.get('/index', (req, res) => res.sendFile(path.join(__dirname,'/views/index.html')));
app.get('/nossaEquipe', (req, res) => res.sendFile(path.join(__dirname,'/views/nossaEquipe.html')));


/**
 * Requisição - Upload de arquivos
 */
 app.post('/uploadFoto',upload.single('nomeFoto'),function(req, resp){
    resp.end();
});

 app.set('views',path.join(__dirname,'/views'))
 app.set('view engine','pug')

/**
 * Rotas
 */
 const routes = require('./routes');
 routes(app);

 app.post('/cadastros',function(req, resp){
    resp.sendFile(__dirname + '/views/form-album-digital.html');
});
 
 