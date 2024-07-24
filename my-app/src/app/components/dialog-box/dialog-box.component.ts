import { Component, Inject, inject, model, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IProducts } from '../../models/products';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, ReactiveFormsModule, MatButtonModule, FormsModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
})

export class DialogBoxComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA)
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent> ) {
    if (this.data) this.isNew = false;
  }
  // constructor(
  //   public dialogRef: MatDialogRef<DialogBoxComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  // ) {
  //   if (this.data) this.isNew = false;
  // }

  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price: new FormControl(this.data?.price ?? ''),
    year: new FormControl(this.data?.year ?? ''),
    memory: new FormControl(this.data?.configure.memory ?? ''),
    RAM: new FormControl(this.data?.configure.RAM ?? ''),
    screen: new FormControl(this.data?.configure.screen ?? ''),
    CPU: new FormControl(this.data?.configure.CPU ?? ''),
  })
 
  isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      year: this.myForm.value.year,
      image:  "/assets/images/111.jpg",
      configure: {
        chip: this.myForm.value.chip,
        ssd: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      }
    };

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {

  }

}
































// export class DialogBoxComponent implements OnInit {
//   dialogRef = inject(MatDialogRef<DialogBoxComponent>);
//   data = inject(MAT_DIALOG_DATA);
//   // constructor(
//   //   public dialogRef: MatDialogRef<DialogBoxComponent>,
//   //   @Inject(MAT_DIALOG_DATA) public data: any,
//   // ) {
//   //   if(this.data) this.isNew = false
//   // }

//    // myForm: FormGroup = new FormGroup({
//   //   id: new FormControl(''),
//   //   title: new FormControl(''),
//   //   price: new FormControl(''),
//   //   year: new FormControl(''),
//   //   memory: new FormControl(''),
//   //   RAM: new FormControl(''),
//   //   screen: new FormControl(''),
//   //   CPU: new FormControl(''),
//   // })

//   isNew: boolean = true

//   myForm: FormGroup = new FormGroup({
//     id: new FormControl(this.data?.id ?? null),
//     title: new FormControl(this.data?.title ?? ''),
//     price: new FormControl(this.data?.price ?? ''),
//     year: new FormControl(this.data?.year ?? ''),
//     memory: new FormControl(this.data?.memory ?? ''),
//     RAM: new FormControl(this.data?.RAM ?? ''),
//     screen: new FormControl(this.data?.screen ?? ''),
//     CPU: new FormControl(this.data?.CPU ?? ''),
//   })
 
  

//   onNoClick(): void {
//     this.dialogRef.close(null);
//   }

//   onSubmit() {
//     this.data = {
//       id: this.myForm.value.id ,
//       title: this.myForm.value.title,
//       price: this.myForm.value.price,
//       year: this.myForm.value.year,
//       image: "assets/images/111.jpg",
//       configure: {
//         memory: this.myForm.value.memory,
//         RAM: this.myForm.value.RAM,
//         screen: this.myForm.value.screen,
//         CPU: this.myForm.value.CPU,
//       }
//     }
//     this.dialogRef.close(this.data)
//   }

//   ngOnInit(): void {
//   }
  


// }
