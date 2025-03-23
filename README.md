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

Change example-domain.com and www.example-domain.com in nginx.conf to your domain name

Use command to build prod docker container

```shell
sudo docker compose -f docker-compose.prod.yml up --build -d
```

Use command to add ssl certificates

```shell
sudo docker exec -it <docker-container-id> certbot --nginx -d example-domain.com -d www.example-domain.com
```
