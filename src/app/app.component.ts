import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './store/actions/counter.actions';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(init());
  }
}
