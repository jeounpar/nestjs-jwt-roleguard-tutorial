import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { Roles } from './decorator/role-guard.decorator';

@UseGuards(AuthGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Roles('user')
  @Get('user')
  getUser(): string {
    return this.appService.getUser();
  }

  @Roles('admin')
  @Get('admin')
  getAdmin(): string {
    return this.appService.getAdmin();
  }
}
