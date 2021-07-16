import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class PublicationDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsUUID()
  owner: string;
}
