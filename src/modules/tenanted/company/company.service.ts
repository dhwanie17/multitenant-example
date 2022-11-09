import { Inject, Injectable } from "@nestjs/common";
import { Connection, Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company } from "./company.entity";
import { CONNECTION } from "../../tenancy/tenancy.symbols";

@Injectable()
export class CompanyService {
  private readonly compantyRepository: Repository<Company>;

  constructor(@Inject(CONNECTION) connection: Connection) {
    this.compantyRepository = connection.getRepository(Company);
  }

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = new Company();
    company.name = createCompanyDto.name;

    return this.compantyRepository.save(company);
  }

  async findAll(): Promise<Company[]> {
    return this.compantyRepository.find();
  }
}
