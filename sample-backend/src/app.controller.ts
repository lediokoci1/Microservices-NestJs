import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get()
  getAnalytics() {
    console.log('GET Analytics - BACKEND: ', this.appService.getAnalytics())
    return this.appService.getAnalytics();
  }


  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    this.appService.createUser(createUserRequest)
  }
}
