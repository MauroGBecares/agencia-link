import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { NgoComponent } from './components/ngo/ngo';
import { ServicesComponent } from './components/services/services';
import { TestimonialsComponent } from './components/testimonials/testimonials';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    NgoComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
