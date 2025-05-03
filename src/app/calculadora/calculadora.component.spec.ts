import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;

  beforeEach(() => {
    component = new CalculadoraComponent();
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar dígitos al display', () => {
    component.presionar('1');
    component.presionar('2');
    component.presionar('3');
    expect(component.display).toBe('123');
  });

  it('debería limpiar el display al presionar C', () => {
    component.display = '456';
    component.presionar('C');
    expect(component.display).toBe('');
  });

  it('debería evaluar una suma correctamente', () => {
    component.presionar('7');
    component.presionar('+');
    component.presionar('5');
    component.presionar('=');
    expect(Number(component.display)).toBe(12);
  });

  it('debería evaluar una multiplicación correctamente', () => {
    component.presionar('6');
    component.presionar('*');
    component.presionar('4');
    component.presionar('=');
    expect(Number(component.display)).toBe(24);
  });

  it('debería manejar decimales correctamente', () => {
    component.presionar('3');
    component.presionar('.');
    component.presionar('1');
    component.presionar('+');
    component.presionar('0');
    component.presionar('.');
    component.presionar('9');
    component.presionar('=');
    expect(Number(component.display)).toBe(4);
  });

  it('debería mostrar "Error" al evaluar una expresión inválida', () => {
    component.display = '2++';
    component.presionar('=');
    expect(component.display).toBe('Error');
  });

  it('debería permitir dividir correctamente', () => {
    component.presionar('8');
    component.presionar('/');
    component.presionar('2');
    component.presionar('=');
    expect(Number(component.display)).toBe(4);
  });

  it('debería permitir restar correctamente', () => {
    component.presionar('9');
    component.presionar('-');
    component.presionar('4');
    component.presionar('=');
    expect(Number(component.display)).toBe(5);
  });

  it('debería construir una expresión larga correctamente', () => {
    component.presionar('1');
    component.presionar('+');
    component.presionar('2');
    component.presionar('*');
    component.presionar('3');
    component.presionar('=');
    expect(Number(component.display)).toBe(7);
  });
});