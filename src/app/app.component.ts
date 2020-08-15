import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-website';
  textFirst: string = 'textFirst';
  imgFirst: string = 'imgFirst';

  img1: string = 'about-img.svg';
  img2: string = 'about-extra-1.svg';
  img3: string = 'about-extra-2.svg';
  img4: string = '';
}
