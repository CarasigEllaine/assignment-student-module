import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    createStudent(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(studentData);
    }
}