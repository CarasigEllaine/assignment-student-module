import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { Get, Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    createStudent(@Body() studentData: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(studentData);
    }

    @Get()
    findAllStudents(): Promise<Student[]> {
        return this.studentService.findAllStudents();
    }
    
    @Get(':id')
    findStudentById(@Param('id') id: number): Promise<Student> {
        return this.studentService.findStudentById(Number(id));
    }

    @Put(':id')
    updateStudent(
        @Param('id') id: number,
        @Body() studentData: Partial<Student>,
    ): Promise<Student> {
        return this.studentService.updateStudent(id, studentData);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: number): Promise<void> {
        return this.studentService.deleteStudent(id);
    }
}