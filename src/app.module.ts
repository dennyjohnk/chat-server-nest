import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { CatsModule } from './cats.module';
import { ChatbotModule } from './chatbot.module';

@Module({
  imports: [CatsModule, ChatbotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
