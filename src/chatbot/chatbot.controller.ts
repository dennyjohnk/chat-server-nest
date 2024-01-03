import { Controller, Get, Param } from '@nestjs/common';

@Controller('bot')
export class ChatBotController {
  @Get(':id')
  getBotInfo(@Param() params: any): string {
    return `${params.id}`;
  }
}
