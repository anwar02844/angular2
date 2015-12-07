import {Component} from 'angular2/angular2';
@Component({
    selector: 'keyup-form',
    template: `
    <h4>Type away! Press [enter] or mouse away when done.</h4>
    <div>
      <input #box name="anwarkeyup"
        (keyup.enter)="values=box.value"
        (blur)="values=box.value"
        (click)="showAlert($event)">
    <div>
    <div>{{values}}</div>
  `
})
export class KeyUpComponent {
    values='';
    showAlert(e){
        console.log(e);
    }
}
