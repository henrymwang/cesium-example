import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import * as geodesy from 'geodesy';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  test() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    console.log(new geodesy.LatLonSpherical(0, 0));
  }
}
