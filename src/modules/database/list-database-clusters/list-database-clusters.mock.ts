export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
};
export const response = {
    "body": {
      "databases": [
        {
          "id": "9cc10173-e9ea-4176-9dbc-a4cee4c4ff30",
          "name": "backend",
          "engine": "pg",
          "version": "10",
          "connection": {
            "uri": "postgres://doadmin:wv78n3zpz42xezdk@backend-do-user-19081923-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
            "database": "",
            "host": "backend-do-user-19081923-0.db.ondigitalocean.com",
            "port": 25060,
            "user": "doadmin",
            "password": "wv78n3zpz42xezdk",
            "ssl": true
          },
          "private_connection": {
            "uri": "postgres://doadmin:wv78n3zpz42xezdk@private-backend-do-user-19081923-0.db.ondigitalocean.com:25060/defaultdb?sslmode=require",
            "database": "",
            "host": "private-backend-do-user-19081923-0.db.ondigitalocean.com",
            "port": 25060,
            "user": "doadmin",
            "password": "wv78n3zpz42xezdk",
            "ssl": true
          },
          "users": [
            {
              "name": "doadmin",
              "role": "primary",
              "password": "wv78n3zpz42xezdk"
            }
          ],
          "db_names": [
            "defaultdb"
          ],
          "num_nodes": 1,
          "region": "nyc3",
          "status": "online",
          "created_at": "2019-01-11T18:37:36Z",
          "maintenance_window": {
            "day": "saturday",
            "hour": "08:45:12",
            "pending": true,
            "description": [
              "Update TimescaleDB to version 1.2.1",
              "Upgrade to PostgreSQL 11.2 and 10.7 bugfix releases"
            ]
          },
          "size": "db-s-2vcpu-4gb",
          "tags": [
            "production"
          ]
        }
      ],
      "links": {
        "pages": {
          "last": "https://api.digitalocean.com/v2/droplets?page=3&per_page=1",
          "next": "https://api.digitalocean.com/v2/droplets?page=2&per_page=1"
        }
      },
      "meta": {
        "total": 3
      }
    },
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "status": 200,
      "ratelimit-limit": 1200,
      "ratelimit-remaining": 1137,
      "ratelimit-reset": 1415984218
    },
};
