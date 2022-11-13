export abstract class Repository<T> {
  abstract findAll(): Promise<T[]>;
}
