import { RefinedResponse, ResponseType } from 'k6/http';

export function logResponseOnFail(response: RefinedResponse<ResponseType> | any) {
  console.error(`Failed With Status: ${response.status}`);
  console.error(`Failed With URL: ${response.url}`);
  console.info(
    `Response Headers:\n${JSON.stringify(response.headers, null, 2)}`
  );
  try {
    console.info(
      `Response Body:\n${JSON.stringify(JSON.parse(response.body), null, 2)}`
    );
  } catch (error) {
    console.info(`Response Body:\n${JSON.stringify(response.body, null, 2)}`);
  }
}
