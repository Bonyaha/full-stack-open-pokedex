# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server

`npm test` to run tests

`npm run eslint` to run eslint

`npm run build` to make a production build

`npm run start-prod` to run your production build

- I had to change this line in package.json file:
"test:e2e": "cypress open" into this: "test:e2e": "npx cypress run"
Without this change, it didn't run test in CI (it's hanging)
Also I kept the command for e2e tests running locally, but slightly changed it: "test:e2e:open": "cypress open"

- Had to created a file *build_step.sh* for starting app in Render.
Test#8
