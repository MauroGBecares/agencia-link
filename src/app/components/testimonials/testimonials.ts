import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  protected readonly facebook = SITE_CONTENT.contactLinks.facebook;
}
