import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent {
  @Input() className!: string;
  @Input() label!: string;
  @Output() newItemEv = new EventEmitter<string>();

  onAddItem(item:string):void{
    console.log('nuevo item: ', item)
    this.newItemEv.emit(item)
  }

}
