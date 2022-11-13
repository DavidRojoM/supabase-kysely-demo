import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { Repository } from 'src/shared-kernel/domain/repository';
import { BooksController } from './infra/books.controller';
import { BooksRepository } from './infra/books.repository';

@Module({
  controllers: [BooksController],
  providers: [
    {
      provide: Repository,
      useClass: BooksRepository,
    },
  ],
})
export class BooksModule {}
