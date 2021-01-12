import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `세탁이 백엔드 어플리케이션입니다.`;
  }
}
