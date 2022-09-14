## QUICK START

Setup Project
>`yarn install`

Transpile Ts into Js and bundle the test file
>`yarn build`

Clean *dist* folder
>`yarn clean`

## TESTING

How To Run Test File
>`k6 run -u 1 -i 1 --rps=1 dist/[test_file].bundle.js`

How To Run With Config Environment Variables
>`k6 run -e RAMPUPTARGET=10 -e RAMPUPDURATION=10s -e STAYTARGET=5 -e STAYDURATION=20s -e BASE_URL=https://example-base-url.com dist/[test_file].bundle.js`

**CREDIT:** _*Grafana Labs*_ - [k6-typescrpt-template](https://github.com/grafana/k6-template-typescript)
