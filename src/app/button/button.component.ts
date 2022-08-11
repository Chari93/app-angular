import { ChangeDetectionStrategy,Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() label!: string;
  constructor() { }

  counterRender():boolean{
    console.log('Render button')
    return true;
  }
 
}
