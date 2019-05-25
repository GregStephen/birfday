import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid)
    .then((birthday) => {
      let domstring = '';
      domstring += `<h1>${birthday.date}</h1>`;
      domstring += `<img src="${birthday.imageUrl}" alt="birthday location">`;
      domstring += `<h3>${birthday.location} @ ${birthday.time}</h3>`;
      util.printToDom('event', domstring);
    }).catch(err => console.error('could not get birfday', err));
};

export default { birfdayStringBuilder };
