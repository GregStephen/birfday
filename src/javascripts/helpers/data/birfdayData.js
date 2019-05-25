import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getBirfdayByUid = uid => new Promise((resolve, reject) => {
  console.error(uid);
  axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      console.error(birthdayResults);
    })
    .catch(err => reject(err));
});

export default { getBirfdayByUid };
