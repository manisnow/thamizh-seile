import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


import { Menus } from './sidemenu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidemenus = Menus
  title = 'தமிழ் வளர்ச்சி மையம் வரவேற்கிறது';
  email = 'manisnow@gmail.com'

   options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
