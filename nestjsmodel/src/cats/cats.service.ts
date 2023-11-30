import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ){}


  create(createCatInput: CreateCatInput) {
    let cat = new Cat(); 
    cat.exampleField = createCatInput.exampleField
    return this.catRepository.save(cat);
  }

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: number) {
    let cat = new Cat();
    cat.exampleField = id;
    return this.catRepository.findOneBy(cat);
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return this.catRepository.remove({exampleField:id});
  }
}
