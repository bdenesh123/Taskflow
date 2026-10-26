import { Model } from 'objection';

export class User extends Model {
  id!: string;
  name!: string;
  email!: string;
  password_hash!: string;
  avatar_url!: string | null;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'users';

  static idColumn = 'id';
}
