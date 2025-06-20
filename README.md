# How to run in dev environment

Rename .env.template.dev to .env and fill with correct data

In api.enum.ts set correct paths:

```shell
CoreApi = 'https://localhost:7054/Api',
```

In .env set correct frontend path and variables:

```shell
CORE_API_ENV=Development
FRONTEND_URL=http://localhost:4200
```

Create directory certs in main repo directory and generate self-signed certificate for API:

```shell
dotnet dev-certs https -ep certs/cert.pfx -p <password>
```

Add password to .env file:

```shell
CERT_PASSWORD=
```

Trust certs (for dev)

```shell
dotnet dev-certs https --trust
```

Use command to build dev docker container

```shell
sudo docker compose -f docker-compose.dev.yml up --build
```

## Swagger links

core-api: https://localhost:7054/swagger/index.html

## App frontend available via

http://localhost:4200/

# How to build on server

Copy/clone project files to desired directory on server

Change all example-domain.com appearances to your domain name

In api.enum.ts set correct paths:

```shell
CoreApi = 'https://example-domain.com/Api',
```

Create directory certs in main repo directory and generate self-signed certificate for API:

```shell
dotnet dev-certs https -ep certs/cert.pfx -p <password>
```

Add password to .env file:

```shell
CERT_PASSWORD=
```

Use command to build prod docker container

```shell
sudo docker compose -f docker-compose.prod.yml up --build -d
```

Use command to add ssl certificates

```shell
sudo docker exec -it <docker-container-id> certbot --nginx -d example-domain.com -d www.example-domain.com
```

Ssl certificates for testing purposes

```shell
sudo docker exec -it <docker-container-id> certbot --nginx -d example-domain.com -d www.example-domain.com --server https://acme-staging-v02.api.letsencrypt.org/directory
```

# How to replace and update frontend files without stopping nginx

Copy/clone project files to desired directory on server

Change all example-domain.com appearances to your domain name

Build the Angular App in a Temporary Container:

```shell
sudo docker build --target build -t angular-build-temp -f frontend/Dockerfile.prod .
```

Create a Temporary Container to Extract the Build

```shell
sudo docker create --name temp angular-build-temp
```

Copy the Angular Build Files to the Host Machine

```shell
sudo docker cp temp:/app/dist/frontend/browser ./frontend-dist
```

Copy the Files to the Running Nginx Container

```shell
sudo docker cp ./frontend-dist/. angular-dotnet-postgres-docker-frontend-1:/usr/share/nginx/html
```
