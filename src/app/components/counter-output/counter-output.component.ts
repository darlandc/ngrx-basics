import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOutputComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }
}
