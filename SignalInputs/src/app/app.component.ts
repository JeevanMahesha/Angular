import { Component } from '@angular/core';
import { DecoratorInputComponent } from './decorator-input/decorator-input.component';
import { SignalInputComponent } from './signal-input/signal-input.component';
import { TitleCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DecoratorInputComponent,
    SignalInputComponent,
    TitleCasePipe,
    RouterOutlet,
    RouterLink,
  ],
  template: `
    <div class="container text-center mt-5 ">
      <div class="row">
        <div class="col border">
          <h4>{{ 'decorator input' | titlecase }}</h4>
          <app-decorator-input
            [countValue]="initialCountValue"
            [doubleCountValue]="initialCountValue"
          ></app-decorator-input>
        </div>
        <div class="col border">
          <h4>{{ 'signal input' | titlecase }}</h4>

          <app-signal-input
            [countValue]="initialCountValue"
            [doubleCountValue]="initialCountValue"
          ></app-signal-input>
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col mt-2">
          <button
            type="button"
            class="btn btn-primary"
            (click)="increaseCount()"
          >
            Increase Count
          </button>
        </div>
        <div class="col"></div>
      </div>
    </div>

    <hr />
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/route-parameters', 1]">
              Route Parameter as Signal
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export default class AppComponent {
  initialCountValue = 0;
  increaseCount(): void {
    this.initialCountValue++;
  }
}
