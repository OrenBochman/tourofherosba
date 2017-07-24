import { Component, OnInit,  } from '@angular/core';
import { BackandService      } from '@backand/angular2-sdk';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // changed to scss files.
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  res: string;
  title = 'tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private backand: BackandService) { }

  getList(): void {
    this.res = 'fetching objects...';
    this.backand.object.getList('users').then((res: any) => {
      this.res = `${res.data.length} objects fetched`;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.backand.init({
      appName: 'tourofheroesba',
      anonymousToken: 'eb9dab75-673c-4813-b4f7-dd641cbe5db1'
    });
    this.getList();
 }
}
