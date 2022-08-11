import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change = ', changes)
  }
  ngOnInit(): void {
    console.log('Intit = ')
  }
  ngOnDestroy(): void {
    console.log('Destroy')
  }
 
}
