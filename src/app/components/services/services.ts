import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  protected readonly services = SITE_CONTENT.services;
  protected readonly links = SITE_CONTENT.contactLinks;
}
