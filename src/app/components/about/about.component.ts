import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Abu Dhabi, UAE' },
    { icon: 'fas fa-briefcase', label: 'Experience', value: '7+ Years' },
    { icon: 'fas fa-satellite-dish', label: 'Domain', value: 'Defense / Opto-Electronics' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'MSc Photonics, CUSAT' },
    { icon: 'fas fa-language', label: 'Languages', value: 'English, Malayalam, Hindi' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'govind.ranadas@outlook.com' },
  ];
}
