import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes-test';

  buckets = [
    {
      id: 1,
      name: 'test 1',
      group: 'bucket group 1'
    },
    {
      id: 2,
      name: 'test 2',
      group: 'bucket group 2'
    },
    {
      id: 3,
      name: 'test 3',
      group: 'bucket group 3'
    },
    {
      id: 4,
      name: 'test 4',
      group: 'bucket group 4'
    },
  ]
}
