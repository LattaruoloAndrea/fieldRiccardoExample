import { Component } from '@angular/core';
import { DragClass } from 'src/assets/classes/dragClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragDropexample';
  dragComponents: DragClass[] = [];
  textAdd: string = '';
  colors= ['red','blue'];
  color:string = 'red';


  addDrag(){
    let newItem= new DragClass();
    newItem.text = this.textAdd;
    newItem.color = this.color;
    this.dragComponents.push(newItem);
    this.textAdd = '';
  }

  save(){

  }


}
