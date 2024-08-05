import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], {
    message: 'role must be ADMIN, ENGINEER or INTERN',
  })
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
