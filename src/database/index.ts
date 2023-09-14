import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": "docker",
  "password": "ignite",
  "database": "rentx",
  "entities": ['src/**/*.entity{.js,.ts}'],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],

})
