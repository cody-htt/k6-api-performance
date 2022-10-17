import { check } from 'k6';
import { RefinedResponse, ResponseType } from 'k6/http';
import { logResponseOnFail } from './logResponseOnFail';

export function verifyResStatus(message: string, res: RefinedResponse<ResponseType>, expStatus: number) {
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

export function verifyResBody(
  message: string,
  res: RefinedResponse<ResponseType>,
  getActResult: Function | null,
  actResult: any,
  expResult: any) {
  if (getActResult) {
    check(res, { [message]: r => getActResult(r) === expResult });
  } else if (
    !check(res, {
      [message]: _r => actResult === expResult,
    })
  ) {
    logResponseOnFail(res);
  }
}
