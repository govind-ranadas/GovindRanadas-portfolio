import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  titles = ['Electro-Optics Engineer', 'Photonics Engineer', 'Opto-Mechatronics Engineer'];

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:govind.ranadas@outlook.com', label: 'Email' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/971506758258', label: 'WhatsApp' },
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
