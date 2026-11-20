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
      category: 'Design and Simulation Tools',
      icon: 'fas fa-eye',
      color: '#ff9d3d',
      skills: [
        { name: 'Zemax Optical Studio', level: 80 },
        { name: 'Altium Desinger', level: 90 },
        { name: 'Optisystem design software', level: 75 },
        { name: 'LT spice', level: 80 },
        { name: 'Lumerical FDTD', level: 75 },

      ]
    },
    {
      category: 'Instrumentation',
      icon: 'fas fa-microchip',
      color: '#22d3ee',
      skills: [
        { name: 'Optical Spectrometer', level: 90 },
        { name: 'Laser Sources', level: 90 },
        { name: 'Optical Power & Energy Meters', level: 90 },
        { name: 'Digital Oscilloscope', level: 75 },
       { name: 'SWIR & MWIR Imaging Cameras', level: 80 },

      ]
    },
    {
      category: 'Tools & Equipment',
      icon: 'fas fa-flask',
      color: '#ff9d3d',
      skills: [
        { name: 'Fiber-Optic Fusion Splicer', level: 80 },
        { name: 'Precision Fiber-Optic Cleaver', level: 80 },
        { name: 'Precision Crimping', level: 80 },
        { name: 'Electronics Soldering Station', level: 70 },
      ]
    },
    {
      category: 'Tools & Practices',
      icon: 'fas fa-tools',
      color: '#22d3ee',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'LASER', level: 80 },
        { name: 'Spectrometer', level: 95 },
        { name: 'MS Office Suite', level: 85 },
      ]
    }
  ];
}
