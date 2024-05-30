import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { homePageComponent } from './homePage/homePage.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, homePageComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'API-Homework';
}
