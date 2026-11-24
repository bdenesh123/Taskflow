import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';

import { KNEX_CONNECTION } from '../database/database.constants';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject(KNEX_CONNECTION)
    private readonly knex: Knex,
  ) {}

  async findAll() {
    return User.query(this.knex)
      .select('id', 'name', 'email', 'avatar_url', 'created_at', 'updated_at')
      .whereNull('deactivated_at')
      .orderBy('id', 'asc');
  }

  async findOne(id: string) {
    const user = await User.query(this.knex)
      .findById(id)
      .whereNull('deactivated_at')
      .select('id', 'name', 'email', 'avatar_url', 'created_at', 'updated_at');

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
}
