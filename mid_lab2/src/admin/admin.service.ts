import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService{
    getIndex():string{
        return "hehe service";
    }
    getUsersById(id:number):object{
        console.log(id);
        return {message: "Your ID is " + id};
    }
    // getUsersByNameAndId(qry):object{
    //     return {message: "Your Name is " +qry.name + "and your ID: " +qry.id};
    // }
    //service always return kore
    getUsersByNameAndId(name:string,id:string):object{
        return {message: "Your Name is " +name + " and your ID: " +id};
    }
    addAdmin(myobj:object):object{
        return myobj;
    }
}