import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-project';

  imageHide: boolean = true;

  count: number = 0;

  btnClick(){
    console.log("Button clicked!");
    this.count++;
  }

  btnImage(){
    if(this.imageHide == true){
      this.imageHide = false;
    }

    else{
      this.imageHide = true;
    }
  }



} // App component


