import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo/demo.component';
import { CountriesComponent } from './countries/countries/countries.component';
import { CountryFlagPipe } from './shared/country-flag.pipe';
import { CountryNamePipe } from './shared/country-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, MatToolbarModule, MatFormFieldModule],
    declarations: [AppComponent,
      CountriesComponent,
      DemoComponent,
      CountryNamePipe,
      CountryFlagPipe]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
