import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Seeker System Testing & Qualification',
      tag: 'Defense Systems',
      description: 'Comprehensive testing and qualification of seeker systems used in guided weapon platforms, ensuring accuracy, reliability, and compliance with defense standards — including live, on-field weapon trial support.',
      tech: ['Optical Metrology', 'Field Testing', 'Compliance Validation']
    },
    {
      title: 'PCB & Schematic Design for Opto-Electronic Systems',
      tag: 'Electronics',
      description: 'End-to-end PCB layout and schematic development for electro-optic circuits, built from ICD analysis to define electrical interfaces, signal requirements, and connector pinouts.',
      tech: ['Altium', 'LTSpice', 'ICD Analysis']
    },
    {
      title: 'Diode-Pumped Solid-State Laser (DPSSL)',
      tag: 'Academic — MSc Project',
      description: 'Designed and built a functional diode-pumped solid-state laser, applying solid-state laser optics and diode pumping principles, with full system assembly, alignment, and performance evaluation at Holmarc Opto-Mechatronics Ltd.',
      tech: ['Laser Optics', 'Optical Alignment', 'Zemax']
    },
    {
      title: 'Wavelength Division Multiplexing System',
      tag: 'Academic — BSc Project',
      description: 'Designed and implemented a WDM and de-multiplexing system using prisms and diffraction gratings, applying fiber-optic communication principles to achieve effective wavelength separation and signal integrity.',
      tech: ['Fiber Optics', 'Optical Alignment', 'Signal Integrity']
    }
  ];
}
