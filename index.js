const express = require ('express');
const bodyparser = require ('body-parser');
const port = 3001;
const rotas = require ('./rotas');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/api', rotas)

app.get('/', (req, res)=>{
    res.send('Working...')
})

app.use(express.static(__dirname + './client'));

app.listen(port,()=>{
    console.log('Server working in the port 3001')
});