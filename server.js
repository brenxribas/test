const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const res = require('express/lib/response')

const port = 3000;
const path = require('path');
const { equal } = require('assert');
const app = express();

app.use(session({ secret: '4dsa54d5sada1' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

// app.post('/auth', (req, res) => {
//     let usuario = req.body.usuario;
//     let senha = req.body.senha;

//     if (req.body.usuario == usuario && req.body.senha == senha) {
//         connection.query('SELECT * FROM users WHERE usuario =? and senha =?', [usuario, senha], function (error, results, fields) {
//             if (error) throw error;
//             if (results.length > 0) {
//                 req.session.loggedin = true;
//                 req.session.usuario = usuario;
//                 res.render('logado', { usuario: usuario });
//             } else {
//                 res.send('Usuário e/ou Senha INCORRETA!');
//             }
//             res.end();
//         });
//     } else {
//         res.send('Por favor, digite o usuário e senha!')
//         res.end();
//     }
// });

// app.get("/", (req, res) => {
//     if (req.session.usuario) {
//         res.render('logado');
//     } else {
//         res.render('login');
//     }

//     if (req.session.loggedin) {
//         res.send('Bem-vindo de volta, ' + req.session.usuario + '!');
//     } else {
//         res.send('Faça login para visualizar essa página!');
//     }
//     res.end();
// });

app.listen(port, () => {
    console.log("SERVIDOR EXECUTADO NA PORTA 3000!");
});

