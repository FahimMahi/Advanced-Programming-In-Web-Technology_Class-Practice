import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO, CreateStudentDto } from "./admin.dto";

@Controller('/admin')
export class AdminController{
    constructor(private readonly adminService: AdminService){}
    @Get()
    getUsers(): object{
        return this.adminService.getUsers();
    }
    @Get('users/:id')
    getUsersById(@Param('id') id: string): object{
        return this.adminService.getUsersById(id);
    }

    @Get('users/')
    getUsersByNameAndId(@Query('name') name: string,
    @Query('id') id:string) : object{
        return this.adminService.getUsersByNameAndId(name, id);
    }
    @Post('adduser')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: AdminDTO): Promise<AdminDTO>{
        console.log(myobj.name);
        return this.adminService.addUser(myobj);
    }
    @Post('createstudent')
    @UsePipes(new ValidationPipe)
    createStudent(@Body() createStudentDto: CreateStudentDto) {
        return this.adminService.createStudent(createStudentDto);
    }

    // @Get()
    // async getAllStudents() {
    //     const students = await this.adminService.getAllStudents();
    //     return { students }; // Assuming students is an array of student objects retrieved from the service
    // }

}
