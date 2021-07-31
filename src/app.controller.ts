import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { $ } from 'zx';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return (await $`echo 'hello'`).stdout;
  }
}
