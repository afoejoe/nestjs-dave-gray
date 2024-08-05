import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly dbService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.UserCreateInput) {
    console.log({ createEmployeeDto });

    return this.dbService.user.create({ data: createEmployeeDto });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.dbService.user.findMany({
      where: {
        role,
      },
    });
  }

  async findOne(id: number) {
    return this.dbService.user.findUnique({ where: { id } });
  }

  async update(id: number, updateEmployeeDto: Prisma.UserUpdateInput) {
    return this.dbService.user.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.dbService.user.delete({ where: { id } });
  }
}
