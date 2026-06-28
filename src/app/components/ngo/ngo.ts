import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-ngo',
  imports: [NgOptimizedImage, RevealDirective],
  templateUrl: './ngo.html',
  styleUrl: './ngo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgoComponent {
  protected readonly whatsapp = SITE_CONTENT.contactLinks.whatsapp;
}
