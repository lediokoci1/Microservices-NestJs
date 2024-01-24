import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = []

  constructor(@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    // Emit an event in user creation
    this.users.push(createUserRequest)
    this.communicationClient.emit('user_created', new CreateUserEvent(createUserRequest.email))
  }
}
