git fetch
git pull
docker compose down
docker buildx build --platform linux/amd64 -t pts24 .
docker compose up -d
docker system prune -f
docker volume prune -f
docker network prune -f
docker container prune -f
docker image prune -f

