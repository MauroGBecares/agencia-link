import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONTENT } from '../../core/site-content';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-footer',
  imports: [RevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly links = SITE_CONTENT.contactLinks;
  protected readonly year = new Date().getFullYear();
}
