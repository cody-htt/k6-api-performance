import { sleep } from 'k6';
import { Options } from 'k6/options';
import { verifyResStatus } from '../utils/verifyResponse';
import { checkErrorRate } from '../utils/checkErrorRate';
import http from 'k6/http';

export let options: Options = {
  vus: 5,
  duration: '10s',
  iterations: 20,
};

export default () => {
  const res = http.get('https://test-api.k6.io');
  verifyResStatus('Check res status 200', res, 200);
  checkErrorRate(res);
  sleep(1);
};
