import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid)
    .then((resp) => {
      console.error(resp);
      let domstring = '';
      domstring += '<h2>BIRFDAY</h2>';
      util.printToDom('event', domstring);
    }).catch(err => console.error('could not get birfday', err));
};

export default { birfdayStringBuilder };
