import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App]
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the main landing sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('AGENCIA LINK');
    expect(compiled.querySelector('#nosotros')).toBeTruthy();
    expect(compiled.querySelector('#servicios')).toBeTruthy();
    expect(compiled.querySelector('#testimonios')).toBeTruthy();
    expect(compiled.querySelector('#ongs')).toBeTruthy();
    expect(compiled.querySelector('#contacto')).toBeTruthy();
  });
});
