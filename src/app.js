import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import "dotenv/config";
import resolvers from './resolvers';
import typeDefs from './typeDef';
import connectDB from './db';

const init = async () =>{
    // Configuración de Express
const app = express();
connectDB()

// Configuración de Apollo Server


const server = new ApolloServer({
  typeDefs,
  resolvers
});
await server.start()
server.applyMiddleware({ app });

// Configuración de Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Arranque del servidor
const port = process.env.PORT || 3000;;

app.listen(port, () => {
  console.log(`Servidor levantado en el puerto ${port}.`);
});
}
init()