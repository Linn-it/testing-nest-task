import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfigFactory } from './config/database.config.service';
import { EmployeeModule } from './modules/employee/employee.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProjectModule } from './modules/project/project.module';
import { TaskModule } from './modules/task/task.module';
import { AuthModule } from './modules/auth/auth.module';

const configService = new ConfigService();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: mongooseConfigFactory,
      inject: [ConfigService],
    }),
    MailerModule.forRoot({
      transport: {
        host: configService.get('MAIL_SERVICE'),
        auth: {
          user: configService.get('MAIL_USER'),
          pass: configService.get('MAIL_PASS'),
        },
      },
    }),
    AuthModule,
    ProjectModule,
    EmployeeModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
