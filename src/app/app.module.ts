import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { AppComponent } from './app.component';

// Module
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
