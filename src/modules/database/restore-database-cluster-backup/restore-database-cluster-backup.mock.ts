export const request = {
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer bearer-token"
  },
  "body": {
    "name": "backend-restored",
    "backup_restore": {
      "database_name": "backend",
      "backup_created_at": "2019-01-31T19:25:22Z"
    },
    "engine": "pg",
    "version": "10",
    "region": "nyc3",
    "size": "db-s-2vcpu-4gb",
    "num_nodes": 2
  },
  "minimumBody": {
    "name": "backend",
    "engine": "pg",
    "region": "nyc3",
    "size": "db-s-2vcpu-4gb",
    "num_nodes": 2,
    "backup_restore": {
      "database_name": "backend",
      "backup_created_at": "2019-01-31T19:25:22Z"
    },
  },
};
export const response = {
    "body": {
      "database": {
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
        "users": null,
        "db_names": null,
        "num_nodes": 2,
        "region": "nyc3",
        "status": "creating",
        "created_at": "2019-01-11T18:37:36Z",
        "maintenance_window": null,
        "size": "db-s-2vcpu-4gb",
        "tags": [
          "production"
        ]
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
