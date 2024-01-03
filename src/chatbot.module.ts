import { Module } from '@nestjs/common';

import { ChatBotController } from './chatbot/chatbot.controller';

@Module({
  controllers: [ChatBotController],
  providers: [],
})
export class ChatbotModule {}
