import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';
  loginform = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')

  })

  loginuser()
  {
    console.log(this.loginform.value);
    
  }
}
