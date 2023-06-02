import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregraEmpleadosComponent } from './agregra-empleados.component';

describe('AgregraEmpleadosComponent', () => {
  let component: AgregraEmpleadosComponent;
  let fixture: ComponentFixture<AgregraEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AgregraEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregraEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
