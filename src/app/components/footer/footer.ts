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
  protected readonly socialLinks = [
    {
      label: 'LinkedIn',
      url: SITE_CONTENT.contactLinks.linkedin,
      icon: 'assets/icons/social-linkedin.svg'
    },
    {
      label: 'Instagram',
      url: SITE_CONTENT.contactLinks.instagram,
      icon: 'assets/icons/social-instagram.svg'
    },
    {
      label: 'Facebook',
      url: SITE_CONTENT.contactLinks.facebook,
      icon: 'assets/icons/social-facebook.svg'
    }
  ];
  protected readonly year = new Date().getFullYear();
}
