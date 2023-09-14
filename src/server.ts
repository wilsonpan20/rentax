import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import swaggerFile from './swagger.json';
import { AppDataSource } from './database';
import './shared/container'

const initializeDatasources = async () => {
  await AppDataSource.initialize();
}

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
initializeDatasources().then(() => {
  app.listen(3333, () => console.log('Server is running!'));
}).catch((err) => {
  console.error('Erro during Database initialization',err)
})

