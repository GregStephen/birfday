import util from '../../helpers/util';

const authStringBuilder = () => {
  let domstring = '';
  domstring += '<h2>AUTH</h2>';
  util.printToDom('auth', domstring);
};

export default { authStringBuilder };
