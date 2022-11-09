import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company } from "./company.entity";
import { CompanyService } from "./company.service";

@Controller("company")
export class CompanyController {
  constructor(private readonly CompanyServices: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.CompanyServices.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.CompanyServices.findAll();
  }
}
