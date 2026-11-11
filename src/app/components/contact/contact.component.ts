import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'govind.ranadas@outlook.com',
      href: 'mailto:govind.ranadas@outlook.com',
      accent: '#22d3ee'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '+971 50 675 8258',
      href: 'https://wa.me/971506758258',
      accent: '#25D366'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Abu Dhabi, UAE',
      href: 'https://maps.google.com/?q=Abu+Dhabi,UAE',
      accent: '#ff9d3d'
    }
  ];

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  ];
}
