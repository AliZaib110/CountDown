import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountDown-Button';

  check:any;
  item:any;
  constructor() { }

  ngOnInit(): void { 
    var counter = 30;
    var color="white"
    var element  = <HTMLElement>document.getElementById("demo");
   this.check = setInterval(() => {

       counter=counter-1
       if(counter>20 && counter<30){
        color="yellow"
        element.style.background = color
    }
    else if(counter>10 && counter<=20){
        color="red"
        element.style.background = color
        }
        else if(counter>0 && counter<=10){
           color="brown"
           element.style.background = color
       }
       else if(counter==0){
        clearTimeout(this.check);
        console.log(this.check);

       }
       element.innerHTML = counter.toString();
    }, 1000);
// console.log(check);

  }
  // myStopFunction() {
  //   clearTimeout(this.check);
  //   }
    
}




