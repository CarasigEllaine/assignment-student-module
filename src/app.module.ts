import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'your-username',
      password: '12345',
      database: 'assignment',
      entities: [Student],
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}