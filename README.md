# Exoplanet project

## About the project
We are working with a data provided by **NASA** from **Kepler** telescope, which discovered many planets in the Universe and we filtered and found out habitable ones and that's not all. We are planning to complete launch missions to discover those planets together in a very beautiful scientefic friendly web app 😊.

## Architecture

A couple of words about the _architecture_ which a bit differs. The app has 2 parts **client** and **server** which are controlled by their `package.json` files, but we have one more `package.json` which is the same for both of them and serves both of them. Yes we are serving them from one file and in addition we build our **client** side inside of **server** to serve it with **_express_** under the same port on `localhost`.

### Stack
- Frontend
  - React.js
  - arwes (for sceintecfic UI)
- Backend
  - Node.js
  - Express.js
  - morgan (for logging)

### Versions
- node `v18.18.0 LTS` (23.09.2023)
- npm `v9.8.1`

_They are the same for both **client** and **server**._

### Installation
_Make sure you are running all commands in the **root** directory_

- first run
```bash
npm install
```
- then run following for development
```bash
npm run watch #this will serve client on port 3000 and server on 8000
```

_* For serving all the app on the same **8000** port as a production build served by **express** run_
```bash
npm run deploy #this will serve both client and server on 8000 port
```

---

_The project was carried out within the scope of [Complete NodeJS Developer in 2023 (GraphQL, MongoDB, + more)](https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/) course._
