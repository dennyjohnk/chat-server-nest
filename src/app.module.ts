import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { CatsModule } from './cats.module';
import { ChatbotModule } from './chatbot.module';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule, ChatbotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
  }
}
