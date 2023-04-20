import express from 'express';
import { initializeApp } from 'firebase/app';
import cors from 'cors';
import sendTestMsg from '../index.js';
import bodyParser from 'body-parser';
import { getDatabase, ref, onValue} from 'firebase/database';

const app = express();
const port = 3002;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const firebaseConfig = {
  apiKey: 'AIzaSyAoRDFohvxmFv77pjrnDxLORc7U-b2vqGs',
  authDomain: 'cosmosexpress-1183f.firebaseapp.com',
  databaseURL: 'https://cosmosexpress-1183f-default-rtdb.firebaseio.com',
  projectId: 'cosmosexpress-1183f',
  storageBucket: 'cosmosexpress-1183f.appspot.com',
  messagingSenderId: '373631050981',
  appId: '1:373631050981:web:2fc5f8125a38ce05b2600c',
};

const firebaseApp =  initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

app.post('/', (req, res) => {
  let data = req.body;
  console.log(data);
  // res.status(200).send(JSON.stringify(data));
  sendTestMsg(JSON.stringify(data));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
