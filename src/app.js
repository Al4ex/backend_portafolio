import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors'
import http from 'http'
import "dotenv/config";
import resolvers from './resolvers';
import typeDefs from './typeDef';
import connectDB from './db';

const init = async () =>{
    // Configuración de Express
const app = express();
const httpServer = http.createServer(app);
connectDB()

// Configuración de Apollo Server


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start()

// Configuración de Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server),
);

// Arranque del servidor
const port = process.env.PORT || 3000;;
await new Promise((resolve) => httpServer.listen({ port }, resolve));

console.log(`🚀 Server ready at http://localhost:${port}/graphql`);

// app.listen(port, () => {
// });
}
init()