import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-text-img',
  templateUrl: './generic-text-img.component.html',
  styleUrls: ['./generic-text-img.component.scss'],
})
export class GenericTextImgComponent implements OnInit {
  @Input() option: string;
  @Input() img: string;
  constructor() {}

  ngOnInit(): void {}
}
