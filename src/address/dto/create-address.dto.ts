import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  planet: string;

  @IsInt()
  @IsNotEmpty()
  lot: number;

  @IsString()
  description: string;

  @IsString()
  phone: string;

  @IsString()
  coordinates: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
