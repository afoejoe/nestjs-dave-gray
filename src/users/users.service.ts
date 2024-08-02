import { Injectable } from '@nestjs/common';
import { UserDTO } from './users.controller';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'dave-gray',
      email: 'JpjJl@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'dave-gray2',
      email: 'JpjJl@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: UserDTO) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, user: UserDTO) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...user,
    };

    return this.users[userIndex];
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
