import { TestService } from './test.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  items;

  constructor(private test: TestService) {
    this.items = this.test.getTest().subscribe();
  }

}

