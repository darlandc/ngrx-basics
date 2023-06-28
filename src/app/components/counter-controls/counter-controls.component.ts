import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  reset,
} from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterControlsComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(
      increment({
        value: 1,
      })
    );
  }

  decrement() {
    this.store.dispatch(
      decrement({
        value: 1,
      })
    );
  }

  reset() {
    this.store.dispatch(
      reset({
        value: 0,
      })
    );
  }
}
