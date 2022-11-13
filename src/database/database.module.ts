import { Global, Module } from '@nestjs/common';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import { KyselyDatabaseConnection } from './kysely-database.connection';
import { Pool } from 'pg';
import { environment } from 'src/environment/environment';

@Global()
@Module({
  providers: [
    {
      provide: KyselyDatabaseConnection,
      useFactory: async () => {
        const db = new Kysely({
          dialect: new PostgresDialect({
            pool: new Pool({
              host: environment.DB_HOST,
              port: environment.DB_PORT,
              user: environment.DB_USERNAME,
              password: environment.DB_PASSWORD,
            }),
          }),
          plugins: [new CamelCasePlugin()],
        });

        await db.getExecutor().provideConnection(async () => {});

        return db;
      },
    },
  ],
  exports: [KyselyDatabaseConnection],
})
export class DatabaseModule {}
