import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team: number[] = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}
