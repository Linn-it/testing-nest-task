import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskRequestDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  project: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  assignedEmployee: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  estimateHour: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  actualHour: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  status: string;

  estimate_start_date: string;

  estimate_finish_date: string;

  actual_start_date: string;

  actual_finish_date: string;
}
