import { SnakeNamingStrategy } from "./snake-naming.strategy";

import { join } from "path";

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "Sarvadhi@2022",
  database: "tenancy",
  namingStrategy: new SnakeNamingStrategy(),
  logging: true,
  autoLoadEntities: true,
  entities: [join(__dirname, "./modules/public/**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "./migrations/public/*{.ts,.js}")],
};
