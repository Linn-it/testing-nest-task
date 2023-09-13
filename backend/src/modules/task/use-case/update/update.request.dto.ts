import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskRequestDto {
  @ApiProperty()
  project: string;

  @ApiProperty()
  assignedEmployee: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  estimateHour: number;

  @ApiProperty()
  actualHour: number;

  @ApiProperty()
  status: string;

  estimate_start_date: string;

  estimate_finish_date: string;

  actual_start_date: string;

  actual_finish_date: string;
}
