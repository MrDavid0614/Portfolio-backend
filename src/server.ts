import * as dotenv from 'dotenv';
import cors from 'cors';
import express, { Express } from 'express';

import router from './router';

dotenv.config();

const app: Express = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(router);

export default app;