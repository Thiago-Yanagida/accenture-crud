import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelListComponent } from './tabel-list.component';

describe('TabelListComponent', () => {
  let component: TabelListComponent;
  let fixture: ComponentFixture<TabelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
