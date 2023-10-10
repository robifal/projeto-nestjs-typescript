import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService{
constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>
){}


    // private readonly cats: Cat[] = [];

    findAll(): Promise<Cat[]> {
        return this.catsRepository.find();
      }

    // create(cat: Cat): void {
    //     this.cats.push(cat);
    // }

    // findById(id: number): Cat {
    //     return this.cats.find(cat => cat.id === id);
    // }

    // findIndexById(id: number): number {
    //     return this.cats.findIndex(cat => cat.id === id);
    // }

    // deleteByIndex(index: number): void {
    //     this.cats.splice(index, 1);
    // }

    // update(index: number, cat: Cat): void {
    //     this.cats.splice(index, 1, cat);
    // }

}
