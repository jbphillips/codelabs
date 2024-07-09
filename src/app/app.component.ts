import { Component } from "@angular/core";
import { HomeComponent } from './home/home.component'; // adjust the path as necessary
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <main>
      <header class="brand name">
        <img
          class="brand-logo"
          src="assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule] // adjust the path as necessary
})

export class AppComponent {
  title = "homes";
}
