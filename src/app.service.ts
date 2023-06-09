import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): string {
    return 'User!';
  }
  getAdmin(): string {
    return 'Admin!';
  }
}
