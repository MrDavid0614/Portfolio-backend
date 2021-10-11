import * as dotenv from 'dotenv';
import cors from 'cors';
import express, { Express } from 'express';

import { skillsRoute, projectsRoute } from './routes';

dotenv.config();

const app: Express = express();

app.set('port', process.env.PORT || 3000);

app.use(cors())
app.use('/skills', skillsRoute);
app.use('/projects', projectsRoute);

export default app;