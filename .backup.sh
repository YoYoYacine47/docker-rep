#!/bin/sh
mkdir -p backups
docker compose -f docker-compose.dev.yml exec -T db \
  pg_dump -U postgres -Fc myDockerDB > "backups/myDockerDB_$(date +%F_%H-%M).dump"