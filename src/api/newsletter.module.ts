/*
https://docs.nestjs.com/modules
*/
import { NewsletterController } from './controller/newsletter.controller';
import { NewsletterService } from './service/newsletter.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [NewsletterController],
  providers: [NewsletterService],
})
export class NewsletterModule {}
