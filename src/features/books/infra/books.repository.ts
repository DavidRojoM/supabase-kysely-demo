import { Injectable } from '@nestjs/common';
import { KyselyDatabaseConnection } from 'src/database/kysely-database.connection';
import { Repository } from 'src/shared-kernel/domain/repository';
import { Book } from '../domain/book.model';

@Injectable()
export class BooksRepository implements Repository<Book> {
  constructor(private readonly dbConn: KyselyDatabaseConnection) {}
  findAll(): Promise<Book[]> {
    return this.dbConn.selectFrom('book').selectAll('book').execute();
  }
}
