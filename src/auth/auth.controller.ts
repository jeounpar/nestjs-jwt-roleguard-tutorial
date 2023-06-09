import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Req() req) {
    const id: string = req.body.id;
    const password: string = req.body.password;
    return await this.authService.login(id, password);
  }

  @Get('verify')
  async verify(@Req() req) {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return await this.authService.verify(token);
  }
}
