import { NewsletterModule } from './api/newsletter.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [NewsletterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
