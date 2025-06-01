import { SQLSERVER } from "@/constants";
import { Task } from "@/task/task.entity";
import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: SQLSERVER,
        useFactory: async () => new DataSource({
            type: "mssql",
            host: process.env.DB_HOST || "127.0.0.1",
            port: parseInt(process.env.DB_PORT!) || 1433,
            username: process.env.DB_USER || "root",
            password: process.env.DB_PASS || "",
            database: process.env.DB_NAME || "testdb",
            // host: "testserver1047.database.windows.net",
            // port: 1433,
            // username: "useradmin",
            // password: "YS7hudud7SG3UJS",
            // database: "testdb2",
            entities: [
                Task
            ]
        }).initialize()
    }
];