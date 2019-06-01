import firebase from 'firebase/app';
import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import util from '../../helpers/util';

const createNewFriend = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
      // eslint-disable-next-line no-use-before-define
      getFriends(uid);
    })
    .catch(err => console.error('no new friend', err));
};

const newFriendButton = () => {
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = '<button id="add-friend-button" class="btn btn-outline-danger">Add Friend</button>';
  friends.forEach((friend) => {
    domString += `<h3>${friend.name}</h3>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error('friends', friends);
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
