import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller(`/api`)
export class AppController{

    constructor(private appservece:AppService){

    }

    @Get(`/users`)
    getUsers(){
        return this.appservece.getUsers()
    }
}