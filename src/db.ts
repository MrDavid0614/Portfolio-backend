import * as dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config()
const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);
client.connect().then( () => console.log('Database connected'));

const database: Db = client.db('Portfolio');

export default database;
