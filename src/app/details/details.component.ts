import { Component, inject } from '@angular/core';  // import the Component and inject decorators
import { CommonModule } from '@angular/common'; // import the CommonModule
import { ActivatedRoute } from '@angular/router'; // import the ActivatedRoute service
import { HousingLocation } from '../housing-location';
import { HousingLocationService } from '../housing-location.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute); // declare a route property
  housingLocationId = 0; // declare a housingLocationId property

  constructor() { 
    this.housingLocationId = Number(this.route.snapshot.params['id']); // set the housingLocationId property to the id parameter from the route
    // this.route.params.subscribe(params => {
    //   this.housingLocationId = params['id'];
    // });
  } // subscribe to the route params and set the housingLocationId property

}
