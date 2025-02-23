import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SparkPage } from './spark.page';

describe('SparkPage', () => {
  let component: SparkPage;
  let fixture: ComponentFixture<SparkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
