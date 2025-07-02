//Dependencias, son bibliotecas que se instalan para que el servidor pueda levantarse correctamente
const express = require('express'); //Facilita la creacion de servidores y manejo de rutas
const mongoose = require('mongoose'); //Permite conectarse a la BD de mongoDB y crear las colecciones y realizar consultas
const cors = require('cors'); //Permite la comunicacion entre dominios diferentes
const bodyParser = require('body-parser'); //Permite interpretar los datos que vienen en la peticion en formto json

require('dotenv').config(); //Se importa el archivo .env para poder utilizar sus variables dentro del codigo

const app = express(); //Crear una instancia de express
const PORT = process.env.PORT || 3000; //Usar el puerto indicado en .env o si no se indica usar el puerto 3000

//Importacion de las rutas (*asociado)
const usuarioRoute = require("./routes/usuario.route");
const productoRoute = require("./routes/producto.route");

//Intermediarios
app.use(express.json());//Habilita el manejo de JSON en las peticiones
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());//Habilita el analisis de JSON en las peticiones 
app.use(cors());

//Conexion al Servidor
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB Atlas conectado'))
.catch(error => console.log('Ocurrio un error al conectarse con MongoDB: ', error));

//Rutas (*asociado)
app.use("/usuarios", usuarioRoute);
app.use("/productos", productoRoute);

//Mensaje de conexione exitosa
app.get('/', (req,res)=> {
    res.send('Servidor en funcionamiento');
});
//Confirmacion
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en http://localhost:' + PORT);
});