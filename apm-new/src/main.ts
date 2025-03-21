import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appRouter } from './app/app.routes';

bootstrapApplication(AppComponent, { providers: [provideHttpClient(), appRouter] } )
  .catch((err) => console.error(err));
