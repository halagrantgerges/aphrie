import { Component, OnInit } from '@angular/core';
import { ImageSvcService } from '../_shared/image-svc.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  filterBy?: string = 'all';
  visibleImages: {}[] = [
    { url: 'app1', category: 'app' },
    { url: '', category: '' },
    { url: '', category: '' },
  ];
  constructor(private imageService: ImageSvcService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
