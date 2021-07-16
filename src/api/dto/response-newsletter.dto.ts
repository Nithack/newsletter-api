import { classToClass, plainToClass } from 'class-transformer';
export class ResponseNewsletterDto {
  success: boolean;
  data: any;
  public static factory(success: boolean, data: any): ResponseNewsletterDto {
    const resultDataDto = plainToClass(
      ResponseNewsletterDto,
      { success, data },
      {
        ignoreDecorators: true,
      },
    );
    return classToClass(resultDataDto);
  }
}
