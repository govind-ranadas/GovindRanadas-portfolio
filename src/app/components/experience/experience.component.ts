import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Engineer - 1 (Electro-Optics)',
      company: 'Halcon Systems LLC',
      type: 'Electro-Optics / PCB Design',
      period: 'April 2025 – Present',
      location: 'Abu Dhabi, UAE',
      current: true,
      points: [
        'Support development team with testing of cameras and sensors, capturing output data for seeker development.',
        'Execute precision fiber splicing, cleaving, and optical loss measurements for fiber-optic systems.',
        'Design and develop PCB layouts for electronic circuits, including component placement, routing, and modifications.',
        'Review and interpret Interface Control Documents (ICDs) to develop circuit schematics from electrical interface and signal requirements.',
        'Prepare and maintain ICDs documenting electrical interfaces, connector pinouts, and interconnection requirements.',
      ],
      tags: ['PCB Design', 'Fiber Optics', 'ICD', 'Camera & Sensor Testing']
    },
    {
      role: 'Opto-Electronics Engineer',
      company: 'Halcon Systems LLC',
      type: 'Optical Testing & Qualification',
      period: 'April 2023 – March 2025',
      location: 'Abu Dhabi, UAE',
      current: false,
      points: [
        'Executed comprehensive testing and qualification of seeker systems used in guided weapon platforms for accuracy, reliability, and compliance with defense standards.',
        'Supported live and on-field weapon trials with hands-on technical expertise, system validation, and cross-team coordination.',
        'Supported calibration and validation of laboratory instruments, ensuring accurate and repeatable data.',
        'Provided technical evaluations and feasibility assessments to support strategic procurement decisions.',
        'Prepared structured technical reports communicating test outcomes, risks, and recommendations to stakeholders.',
      ],
      tags: ['Seeker Systems', 'Calibration', 'Field Trials', 'Technical Reporting']
    },
    {
      role: 'Graduate Engineer (Photonics / Optics)',
      company: 'Compass Tech Enterprises',
      type: 'Optical Engineering',
      period: 'January 2018 – December 2021',
      location: 'Thrissur, India',
      current: false,
      points: [
        'Investigated, developed, and implemented optical and photonics engineering solutions for product development and manufacturing.',
        'Designed, modeled, and analyzed optical components and subsystems to meet functional and performance requirements.',
        'Collaborated with cross-functional teams to align engineering deliverables with project cost and schedule constraints.',
        'Prepared technical documentation and presentations detailing design approaches, test results, and outcomes.',
      ],
      tags: ['Optical Design', 'Photonics', 'Documentation']
    }
  ];

  education = [
    {
      degree: '5-Year Integrated M.Sc. in Photonics (CGPA: 6.44)',
      institution: 'International School of Photonics, Cochin University of Science and Technology',
      period: '2012 – 2017',
      location: 'Kerala, India'
    }
  ];
}
