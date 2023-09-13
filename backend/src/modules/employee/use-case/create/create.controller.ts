import {
  Controller,
  Response,
  Post,
  Body,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,FileTypeValidator
  // UseGuards,
} from '@nestjs/common';
import { EmployeeService } from '../../service/employee.service';
import { CreateEmployeeRequestDto } from './create.request.dto';
import { CreateEmployeeResponseDto } from './create.response.dto';
// import { AuthGuard } from 'src/modules/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('employee')
@ApiTags('Employee')
export class CreateController {
  constructor(private employeeService: EmployeeService) {}

  @ApiBearerAuth('JWT-auth')
  // @UseGuards(AuthGuard)
  @Post('add')
  @UseInterceptors(FileInterceptor('profile'))
  async create(
    @Response() res,
    @Body() employee: CreateEmployeeRequestDto,
    @UploadedFile(
      new ParseFilePipe({
        validators : [new FileTypeValidator({fileType: 'image/jpeg'})]
      })
    )
    profile : Express.Multer.File,
  ): Promise<CreateEmployeeResponseDto> {
    try {
      const data = await this.employeeService.createEmployee(employee,profile);
      return res
        .status(200)
        .json({ message: 'Employee Created Successfully', data });
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
