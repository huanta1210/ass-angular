import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}
