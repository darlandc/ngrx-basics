import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { usingPropsAndActions } from '../../store/actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private store: Store<{ value: string }>) {
    this.store.dispatch(
      usingPropsAndActions({
        value: 'Deu certo!',
      })
    );
  }
}
