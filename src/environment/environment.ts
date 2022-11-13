import { Environment } from './environment.type';
import * as dotenv from 'dotenv';

dotenv.config();

export const environment: Environment = {
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',
  APP_PORT: Number(process.env.APP_PORT) || 3000,
};
