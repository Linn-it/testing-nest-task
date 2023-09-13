import {
  Controller,
  Put,
  Response,
  Param,
  Body,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { EmployeeService } from '../../service/employee.service';
import { UpdateEmployeeResponseDto } from './update.response.dto';
import { UpdateEmployeeRequestDto } from './update.request.dto';
import { AuthGuard } from 'src/modules/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('employee')
@ApiTags('Employee')
export class UpdateController {
  constructor(private employeeService: EmployeeService) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard)
  @Put('edit/:id')
  async updateEmployee(
    @Response() res,
    @Param('id') id: string,
    @Body() employee: UpdateEmployeeRequestDto,
  ): Promise<UpdateEmployeeResponseDto> {
    try {
      const data = await this.employeeService.updateEmployeeByID(id, employee);
      return res
        .status(200)
        .json({ message: 'Employee Updated Successfullly', data });
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
