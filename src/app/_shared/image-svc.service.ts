import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageSvcService {
  constructor() {}

  visibleImages = [];
  getImages() {
    return (this.visibleImages = IMAGES.slice(0));
  }
  getImage(id: number) {
    return IMAGES.slice(0).find((image) => image.id == id);
  }
}

const IMAGES = [
  {
    id: 1,
    category: 'app',
    url: 'app1.jpg',
  },
  {
    id: 2,
    category: 'app',
    url: 'app2.jpg',
  },
  {
    id: 3,
    category: 'app',
    url: 'app3.jpg',
  },
  {
    id: 4,
    category: 'card',
    url: 'card1.jpg',
  },
  {
    id: 5,
    category: 'card',
    url: 'card2.jpg',
  },
  {
    id: 6,
    category: 'card',
    url: 'card3.jpg',
  },
  {
    id: 7,
    category: 'web',
    url: 'web1.jpg',
  },
  {
    id: 8,
    category: 'web',
    url: 'web2.jpg',
  },
  {
    id: 9,
    category: 'web',
    url: 'web3.jpg',
  },
];
