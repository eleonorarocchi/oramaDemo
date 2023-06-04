import { Component } from '@angular/core';
import { Result, Results, create, insertMultiple, search } from '@orama/orama';
import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  title = 'Divertiamoci con le bandiere';
  countriesDB: any;
  searchBox = '';
  countriesNumber: number = 0;
  searchResult: Results<Result[]> | undefined;

  constructor(private _service: CountriesService) {
    this._service.getAllCountries().subscribe(async result => {
      const docs = result.body;
      await this.createDB();
      await this.populateDB(docs);
      this.countriesNumber = this.countriesDB.data.docs.count;
      this.search();
    });
  }

  private async createDB() {
    this.countriesDB = await create({
      schema: {
        flags:{
          png: 'string',
          svg: 'string',
          alt: 'string'
        },
        name:{
          common: 'string',
          official: 'string',
          nativeName:{
            est:{
              official: 'string',
              common: 'string'
            }
          }
        }
      },
    });
  }

  private async populateDB(docs:[]) {
    await insertMultiple(this.countriesDB, docs, 500);
  }

  async search() {
    this.searchResult = await search(this.countriesDB, {
      term: this.searchBox,
      properties: '*',
      limit: this.countriesNumber
    });
  }
}
