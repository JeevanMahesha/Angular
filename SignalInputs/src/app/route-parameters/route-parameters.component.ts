import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-route-parameters',
  standalone: true,
  template: `
    <h1 class="container text-center mt-5">
      {{ userId() }}
    </h1>
  `,
})
export default class RouteParametersComponent {
  @Input({ transform: (id: string | null) => signal<string | null>(id) })
  userId = signal<string | null>(null);
}
