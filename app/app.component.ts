import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

 templateUrl:'./app.component.html'
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first project';
  public myvar="Amit";

  public num1:string='';
  public num2:string='';
  public res:number=0;

  add(){
   this.res=parseInt(this.num1)+parseInt(this.num2);
  }

  sub(){
    this.res=parseInt(this.num1)-parseInt(this.num2)
  }
  multiply(){
    this.res=parseInt(this.num1)*parseInt(this.num2)
  } divide(){
    this.res=parseInt(this.num1)/parseInt(this.num2)
  }
  exponent(){
    this.res=parseInt(this.num1)**parseInt(this.num2)
  }

  clear(){
    this.num1='';
    this.num2='';
    this.res=0;
    
  }
}
