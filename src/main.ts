import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { homePageComponent } from './app/homePage/homePage.component';
import { waifuPageComponent } from './app/waifuPage/waifuPage.component';
import { catPageComponent } from './app/catPage/catPage.component';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
    {
      path      : '',
      component :homePageComponent
    },
    {
      path      : 'waifuPage',
      component : waifuPageComponent
    },
    {
      path      : 'catPage',
      component : catPageComponent
    }
  ])]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

