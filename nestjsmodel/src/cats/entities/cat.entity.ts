import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Cat {
  @PrimaryColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
