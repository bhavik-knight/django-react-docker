# django-react-docker

## a template setup environment for webapp
- backend: [django](https://www.djangoproject.com/) v4
- frontend: react v18 - [vite.js](https://vitejs.dev/) (reactjs + swc)

## both backend and frontend are in their separate container
idea is to connect them via API calls

## to make frontend working correctly do this
- move frontend dir from react dir to somewhere else (as a backup copy)
- make sure you have `node.js` install correctly. if not check this
    - follow the [official documentation] (https://nodejs.org/en).
    - alternatively you can use this [link] (https://github.com/nodesource/distributions#rpminstall)
- create new vite project using the commands
    - `npm create vite`
    - give the project name `frontend`
- follow the instructions on the screen
    - `cd frontend`
    - `npm install`
- add the lines to enable docker using port 9000 in `vite.config.js` file [refer to the backup copy]
- run the frontend project on port 3000 manually to check if its working correctly
    - `npm run dev -- --port 3000`


## instruction to spin the docker containers
- navigate to the root dir of the project `django-react-docker`
- run the following command
    - `docker compose up -d --build`
- it will take a while to create images from and run the container
- once you get a success message check the running containers using this command
    - `docker ps -a`
- if you don't see any errors, and both ports are woking as intended, then everything is working properly.
- check the ports number for the localhost in the previous command output and there you go!


## TODOs
- database: will be added for the backend later either of the popular choices
    - nosql db: mongodb
    - relational db: postgreqs or mysql
- default db is provided by django is sqlite3
