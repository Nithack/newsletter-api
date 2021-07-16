/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { NewsletterService } from '../service/newsletter.service';

@Controller()
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}
  @Get()
  async getAllPublications(): Promise<any> {
    return await this.newsletterService.getAllPublications();
  }
}
