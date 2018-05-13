import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxRecursiveDropdownComponent } from './ngx-recursive-dropdown.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[NgxRecursiveDropdownComponent],
    exports:[NgxRecursiveDropdownComponent]
})
export class NgxRecursiveDropdownModule{}
