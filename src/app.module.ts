import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './features/books/books.module';

@Module({
  imports: [DatabaseModule, BooksModule],
  exports: [DatabaseModule],
})
export class AppModule {}
