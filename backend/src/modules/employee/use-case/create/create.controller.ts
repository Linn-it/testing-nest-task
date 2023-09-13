import {
  Controller,
  Response,
  Post,
  Body,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from '../../service/employee.service';
import { CreateEmployeeRequestDto } from './create.request.dto';
import { CreateEmployeeResponseDto } from './create.response.dto';
import { AuthGuard } from 'src/modules/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('employee')
@ApiTags('Employee')
export class CreateController {
  constructor(private employeeService: EmployeeService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Post('add')
  async create(
    @Response() res,
    @Body() employee: CreateEmployeeRequestDto,
  ): Promise<CreateEmployeeResponseDto> {
    try {
      const data = await this.employeeService.createEmployee(employee);
      return res
        .status(200)
        .json({ message: 'Employee Created Successfully', data });
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
