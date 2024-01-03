import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Controller('bot')
export class ChatBotController {
  private readonly logger = new Logger(ChatBotController.name);

  @Get(':id')
  async getBotInfo(@Param() params: any): Promise<string> {
    try {
      this.logger.log('get bot called');
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
