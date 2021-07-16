import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsUUID()
  owner: string;
  @IsNotEmpty()
  @IsUUID()
  publication: string;
}
