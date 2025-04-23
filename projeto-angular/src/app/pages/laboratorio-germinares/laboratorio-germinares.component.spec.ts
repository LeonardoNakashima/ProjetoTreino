import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioGerminaresComponent } from './laboratorio-germinares.component';

describe('LaboratorioGerminaresComponent', () => {
  let component: LaboratorioGerminaresComponent;
  let fixture: ComponentFixture<LaboratorioGerminaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratorioGerminaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratorioGerminaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
