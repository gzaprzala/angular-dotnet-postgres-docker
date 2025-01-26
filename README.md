# How to run in dev environment

Rename .env.template.dev to .env and fill with correct data

Use command to build dev docker container

```shell
sudo docker compose -f docker-compose.dev.yml up --build
```

## Swagger links
core-api: http://localhost:7054/swagger/index.html

auth-api: http://localhost:7055/swagger/index.html

## App frontend available via
http://localhost:4200/


# How to build on server

Copy/clone project files to desired directory on server

Use command to build prod docker container

```shell
sudo docker compose -f docker-compose.prod.yml up --build
```

