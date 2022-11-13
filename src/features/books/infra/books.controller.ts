import { Controller, Get } from '@nestjs/common';
import { Repository } from 'src/shared-kernel/domain/repository';
import { Book } from '../domain/book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly repository: Repository<Book>) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.repository.findAll();
  }
}
