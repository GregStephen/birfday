import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';
import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
