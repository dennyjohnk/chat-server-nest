import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('bot')
export class ChatBotController {
  @Get(':id')
  async getBotInfo(@Param() params: any): Promise<string> {
    try {
      return `${params.id}`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
