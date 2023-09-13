import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeRequestDto {
  @ApiProperty()
  employeeName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  dob: string;

  @ApiProperty()
  position: string;
}
