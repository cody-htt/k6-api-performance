import { check } from 'k6';
import { logResponseOnFail } from './logResponseOnFail';

export function verifyResStatus(message, res, expStatus) {
  let result = true;
  if (
    !check(res, {
      [message]: r => r.status === expStatus,
    })
  ) {
    logResponseOnFail(res);
    result = false;
  }
  return result;
}

export function verifyResBody(message, res, actResult, expResult) {
  if (
    !check(res, {
      [message]: _r => actResult === expResult,
    })
  ) {
    logResponseOnFail(res);
  }
}
