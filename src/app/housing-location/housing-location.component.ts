import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

/**
 * Represents the HousingLocationComponent.
 */
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- to make this poperty binding, we need to add brackets around the "src" tag -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="exterior photo of {{ housingLocation.name }}" />
      <h2 class="listing heading">{{ housingLocation.name }}</h2>
      <p class="listing location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a class="listing details" [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <!-- <a routerLink="details">Learn More</a> -->
    </section>

  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  
  // The input property representing the housing location   
  @Input() housingLocation!: HousingLocation;
  

}
