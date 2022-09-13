import { Rate } from 'k6/metrics';

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
