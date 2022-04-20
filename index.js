const express = require ('express');
const app = express();

const dotenv = request ("dotenv");
dotenv.config();

 const port = process.env.PORT;

const cors =require('cors');
const corsOptions={
    origin: "http://localhost:3000"
};
app.use(cors (corsOptions));

app.get('/', (request, response)=>{
    response.json({message: "data from backend app"});
});

app.listen(port, ()=>{
    console.log('server is running on port 3000');
});