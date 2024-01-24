import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly analytics: any[] = []

  getHello(): string {
    return 'Hello World!';
  }

  getAnalytics() {
    return this.analytics;
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - ANALYTICS', data);
    this.analytics.push({
      email: data,
      timestamp: new Date()
    })
  }
}
