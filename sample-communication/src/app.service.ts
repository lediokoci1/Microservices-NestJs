import { Injectable } from '@nestjs/common';
import { CreateUSerRequest } from './create-user-request.dto';

@Injectable()
export class AppService {
  private readonly user

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUSerRequest: CreateUSerRequest) {

  }
}
