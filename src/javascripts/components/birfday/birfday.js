import util from '../../helpers/util';

const birfdayStringBuilder = () => {
  let domstring = '';
  domstring += '<h2>BIRFDAY</h2>';
  util.printToDom('birfday', domstring);
};

export default { birfdayStringBuilder };
