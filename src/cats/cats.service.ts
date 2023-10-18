import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';

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

      create(dto: CreateCatDto): Promise<Cat> {
        return this.catsRepository.save(dto);
    }

    findById(id: number): Promise<Cat | null> {
        return this.catsRepository.findOneBy({ id });
    }

    // findIndexById(id: number): number {
    //     return this.cats.findIndex(cat => cat.id === id);
    // }

   async remove(id: number): Promise<void>{
       await this.catsRepository.delete(id);
    }

    // update(index: number, cat: Cat): void {
    //     this.cats.splice(index, 1, cat);
    // }

}
