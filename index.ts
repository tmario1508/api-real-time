import express, { Request, Response} from 'express';
import settings from './settings';

//Express App
const app = express();

const mockUsers: any[] = [
    { username: 'mtorrese', email: 'mario.torres@gmail.com', fullName: 'Mario Torres Espinosa'},
    { username: 'jperezc', email: 'juan.perezc@gmail.com', fullName: 'Juan Perez Centeno'},
    { username: 'jperezc', email: 'juan.perezc@gmail.com', fullName: 'Juan Perez Centeno'},
]
//Serialization on JSON format
app.use(express.json());

//Routes of API
app.get('/testing', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'SUCCES',
        code: 200,
        environment: settings.mongodb.environment
    });
});

app.get('/getUsers', (req: Request, res: Response) =>{
    res.status(200).json(mockUsers);
});

app.get('/getUser/:userName', (req: Request, res: Response) =>{
    const { userName} = req.params

    res.status(200).json({
        userName
    });
});


app.post('/addUser', (req: Request, res: Response) => {
    const {
        userName,
        email,
        fullName,
        password
    } = req.body;

    res.status(201).json({
        status: 'success',
        msj: 'Registro insertado de forma correcta en la BD',
        userName,
        password,
        email,
        fullName
    });
});


//Listen Express Server
app.listen(settings.api.port, () => {
    console.log('Servidor express corriendo en puerto ${settings.api.port}');
});