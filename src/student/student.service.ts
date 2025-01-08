import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {}

    async createStudent(studentData: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(studentData);
        return this.studentRepository.save(student);
    }

    async findAllStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }
    
    async findStudentById(id: number): Promise<Student> {
        const student = await this.studentRepository.findOne({ where: { id } });
        if (!student) {
            throw new Error(`Student with ID ${id} not found`);
        }
        return student;
    }

    async updateStudent(id: number, studentData: Partial<Student>): Promise<Student> {
        await this.studentRepository.update(id, studentData);
        return this.studentRepository.findOne({ where: { id } });
    }
}