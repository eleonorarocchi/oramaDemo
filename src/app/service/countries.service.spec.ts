import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let injector: TestBed;
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]
    });
    injector = getTestBed();
    service = injector.get(CountriesService);
  });

  describe('#getAllCountries', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });;
});
