import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contac-reactive',
  templateUrl: './contac-reactive.component.html',
  styleUrls: ['./contac-reactive.component.scss']
})
export class ContacReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onPathValue();
  }
  onPathValue():void{
    this.contactForm.patchValue({nombre: 'Pon tu nombre'});
  }
  onSubmit(values:any):void{
    console.log('Form values', values);
  }
  initForm(): FormGroup {
    return this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required]],
      seccion:['', [Validators.required]],
      review: ['']

    
    })
  }
}
