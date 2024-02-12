import { IsEmail, IsInt, IsString } from "class-validator";

export class AdminDTO{
    @IsString()
    name:string;
    @IsInt()
    id:number;
    @IsString()
    @IsEmail()
    email:string;
    address:string;
}
export class CreateStudentDto {
    @IsString()
    name:string;
    @IsInt()
    id:number;
    @IsString()
    address:string;
    @IsInt()
    age:number;
    @IsString()
    @IsEmail()
    email:string;
}
