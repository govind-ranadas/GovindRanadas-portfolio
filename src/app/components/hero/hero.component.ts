import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = ['Electro-Optics Engineer', 'Photonics Engineer', 'Opto-Mechatronics Engineer'];

  // typewriter state
  typedText = '';
  private titleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/govind-ranadas-7333a816a', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:govind.ranadas@outlook.com', label: 'Email' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/971506758258', label: 'WhatsApp' },
  ];

  stats = [
    { num: '4+', label: 'Major Projects' },
    { num: '7+', label: 'Years Experience' },
    { num: '10+', label: 'Technologies' },
    { num: 'Defense', label: 'Domain Expert' },
  ];

  ngOnInit() {
    // short delay so the typing starts right after the page appears
    this.timer = setTimeout(() => this.type(), 500);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  private type() {
    const current = this.titles[this.titleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.typedText = current.substring(0, this.charIndex);

      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);   // pause when fully typed
        return;
      }
      this.timer = setTimeout(() => this.type(), 90);       // typing speed
    } else {
      this.charIndex--;
      this.typedText = current.substring(0, this.charIndex);

      if (this.charIndex === 0) {
        this.deleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.timer = setTimeout(() => this.type(), 400);    // pause before next title
        return;
      }
      this.timer = setTimeout(() => this.type(), 45);       // deleting speed
    }
  }

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}