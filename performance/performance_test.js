import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m", target: 50 },
    { duration: "30s", target: 10 },
    { duration: "30s", target: 0 }, 
  ],
};

export default function () {
  let res = http.get("https://task-app-url.com/api/tasks");

  check(res, {
    "is status 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
    "body is not empty": (r) => r.body.length > 0,
  });

  sleep(1);
}
