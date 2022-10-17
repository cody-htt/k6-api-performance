import { sleep } from 'k6';
import { Options } from 'k6/options';
import { verifyResStatus } from '../utils/verifyResponse';
import { checkErrorRate, randomNumber } from '../utils/utils';
import http from 'k6/http';

export let options: Options = {
  vus: 5,
  duration: '10s',
  iterations: 20,
};

export default () => {
  const res = http.post('https://httpbin.org/status/400');
  verifyResStatus('Check Response Status 400', res, 400);
  checkErrorRate(res);
  sleep(randomNumber(1, 5));
};
