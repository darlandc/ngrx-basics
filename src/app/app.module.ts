import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { HomeComponent } from './components/home/home.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterOutputComponent,
    CounterControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
