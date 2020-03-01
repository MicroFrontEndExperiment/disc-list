import { Component, OnInit } from '@angular/core';
import { LongplayService } from './longplay.service';
import { Longplay } from './longplay.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  longPlays: Longplay[];
  musicsVisible = false;

  constructor(
    private longPlayService: LongplayService
  ) { }

  ngOnInit(): void {
    this.longPlayService.getLongPlays().subscribe((longPlays: Longplay[]) => {
      this.longPlays = longPlays;
    });
  }
}
