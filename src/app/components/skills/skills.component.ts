import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Optical & Photonics Design',
      icon: 'fas fa-eye',
      color: '#ff9d3d',
      skills: [
        { name: 'Zemax', level: 88 },
        { name: 'Lumerical FDTD', level: 85 },
        { name: 'OptiSystem / Optiwave', level: 85 },
        { name: 'Optical System Design & Analysis', level: 90 },
      ]
    },
    {
      category: 'Electronics & PCB',
      icon: 'fas fa-microchip',
      color: '#22d3ee',
      skills: [
        { name: 'Altium Designer', level: 85 },
        { name: 'LTSpice', level: 80 },
        { name: 'PCB Layout & Schematic Design', level: 88 },
        { name: 'ICD Analysis & Documentation', level: 85 },
      ]
    },
    {
      category: 'Testing & Qualification',
      icon: 'fas fa-flask',
      color: '#ff9d3d',
      skills: [
        { name: 'Fiber-Optic Splicing & Testing', level: 90 },
        { name: 'Seeker System Qualification', level: 88 },
        { name: 'Laboratory Instrument Calibration', level: 85 },
        { name: 'On-Field Trial Support', level: 85 },
      ]
    },
    {
      category: 'Tools & Practices',
      icon: 'fas fa-tools',
      color: '#22d3ee',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Configuration Management', level: 80 },
        { name: 'Technical Reporting', level: 88 },
        { name: 'MS Office Suite', level: 85 },
      ]
    }
  ];
}
