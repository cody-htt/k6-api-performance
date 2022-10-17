import { Rate } from 'k6/metrics';
import { BASE_URL } from '../envConfig';

const responseStatusCounters = {
  2: new Rate('2xx_rate'),
  4: new Rate('4xx_rate'),
  5: new Rate('5xx_rate'),
};

export function checkErrorRate(response) {
  const status = response.status.toString();
  const [statusGroup] = status;
  Object.entries(responseStatusCounters).forEach(([k, v]) =>
    v.add(k === statusGroup)
  );
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getBaseUrl = path => `${BASE_URL}/${path}`;
