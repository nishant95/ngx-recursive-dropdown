import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-recursive-dropdown',
  templateUrl: './ngx-recursive-dropdown.component.html',
  styleUrls: []
})
export class NgxRecursiveDropdownComponent implements OnInit {

  @Input() baseList: any[];
  @Input() displayLabel: string;
  @Input() childListName: string;
  @Output() lastSelected = new EventEmitter<any>();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

print(selectElem){
    console.log(selectElem);
    console.log(selectElem.value);
  }

  finalResult = {
    value: 'khali'
  };

  detectChanges(obj){
    this.ref.detectChanges();
    if(obj){
    this.finalResult = obj;
    this.lastSelected.emit(this.finalResult);
    }else{
    this.lastSelected.emit(null);
    }
  }

	preventClick(event){
event.stopPropagation()
		debugger;
	}
}
