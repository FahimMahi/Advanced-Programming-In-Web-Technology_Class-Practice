import { Injectable } from "@nestjs/common";
import { AdminDTO, CreateStudentDto } from "./admin.dto";


@Injectable()
export class AdminService {
    students: CreateStudentDto | PromiseLike<CreateStudentDto>;
    getUsers(): object{
        return {message: "hellow Admin"}
    }
    getUsersById(id: string): object{
        return {message: "You id is " + id};
    }
    getUsersByNameAndId(name: string, id: string): object{
        return {message: "You id is " + name +
        " and your id is " + id};
    }
    async addUser(myobj:AdminDTO):Promise<AdminDTO>{
        console.log(myobj.name);
        return myobj;
    }
    async createStudent(createStudentDto: CreateStudentDto) {
        return { message: 'Student created successfully', student: createStudentDto };
    }

    // async getAllStudents(): Promise<CreateStudentDto> {
    // // Logic to retrieve all students from the data store
    //     return this.students;
    // }
}
