import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from '../app.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let display: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent,CalculadoraComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    display = fixture.debugElement.query(By.css('.pantalla'));
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el número presionado', () => {
    component.presionar('7');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('7');
  });

  it('debería concatenar múltiples dígitos', () => {
    component.presionar('4');
    component.presionar('2');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('42');
  });

  it('debería sumar dos números', () => {
    component.presionar('1');
    component.presionar('+');
    component.presionar('2');
    component.presionar('=');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('3');
  });

  it('debería limpiar el display con C', () => {
    component.presionar('9');
    component.presionar('C');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('');
  });

  it('debería manejar errores de expresión inválida', () => {
    component.presionar('1');
    component.presionar('+');
    component.presionar('+');
    component.presionar('=');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('Error');
  });

  it('debería insertar un decimal correctamente', () => {
    component.presionar('3');
    component.presionar('.');
    component.presionar('1');
    fixture.detectChanges();
    expect(display.nativeElement.value).toBe('3.1');
  });
});