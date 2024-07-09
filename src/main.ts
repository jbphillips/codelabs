import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

// in this case, we don't wrap with braces. This allows us to reference the property we created from routes.ts 
import routeConfig from './app/routes';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(
        routeConfig
        //[
        // { path: '', component: HomeComponent }
      //]
      )
    ]  
  } 
).catch(err => console.error(err));
