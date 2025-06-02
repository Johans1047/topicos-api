import { SQLSERVER } from "@/constants";
import { Task } from "@/task/task.entity";
import { DataSource } from "typeorm";
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: SQLSERVER,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      return new DataSource({
        type: "mssql",
        host: configService.get<string>("DB_HOST") || "127.0.0.1",
        port: parseInt(configService.get<string>("DB_PORT") || "1433", 10),
        username: configService.get<string>("DB_USER") || "root",
        password: configService.get<string>("DB_PASS") || "",
        database: configService.get<string>("DB_NAME") || "testdb",
        entities: [Task],
      }).initialize();
    },
  },
];

// export const databaseProviders = [
//     {
//         provide: SQLSERVER,
//         useFactory: async () => new DataSource({
//             type: "mssql",
//             // host: process.env.DB_HOST || "127.0.0.1",
//             // port: parseInt(process.env.DB_PORT!) || 1433,
//             // username: process.env.DB_USER || "root",
//             // password: process.env.DB_PASS || "",
//             // database: process.env.DB_NAME || "testdb",
//             entities: [
//                 Task
//             ]
//         }).initialize()
//     }
// ];