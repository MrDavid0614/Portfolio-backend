import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config()
const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);
client.connect().then( () => console.log('Database connected'));

export default client;
