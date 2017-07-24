import { Component, OnInit,  } from '@angular/core';
import { BackandService      } from '@backand/angular2-sdk';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // changed to scss files.
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  res: string;
  title = 'tour of Heros';
  heroes = HEROES;

  constructor(private backand: BackandService) { }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

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
