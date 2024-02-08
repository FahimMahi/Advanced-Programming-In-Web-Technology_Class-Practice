import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('admin') // locahost:3000/admin
export class AdminController{
    constructor(private readonly adminService: AdminService){}
    @Get('/index')  // locahost:3000/admin/index
    getIndex():string{
        return this.adminService.getIndex();
    }
    @Get('/users/:id')
    getUsersById(@Param('id') id:number):object{    //route parameter niye then pass
        return this.adminService.getUsersById(id);
    }
    @Get('/users')
    getUsersByNameAndId(@Query('name') name:string, @Query('id') id:string): object{ //query parameter dara receive krbe
        return this.adminService.getUsersByNameAndId(name,id); //service e pass
    }
    // getUsersByNameAndId(@Query() qry): object{ //query parameter dara receive krbe
    //     console.log(qry);
    //     return this.adminService.getUsersByNameAndId(qry);//service e pass
    // }
    @Post('/add')
    addAdmin(@Body() myobj:object):object{
        return this.adminService.addAdmin(myobj);
    }
}