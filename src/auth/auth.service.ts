import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async login(id: string, password: string) {
    const payload = {
      id: id,
      password: password,
      role: 'user',
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async verify(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });
    return payload;
  }
}
