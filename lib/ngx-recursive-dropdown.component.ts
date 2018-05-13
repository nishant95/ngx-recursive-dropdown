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

  ngOnInit() { }

  finalResult = null;

  detectChanges(obj: any) {
    this.ref.detectChanges();
    if (obj) {
      this.finalResult = obj;
      this.lastSelected.emit(this.finalResult);
    } else {
      this.lastSelected.emit(null);
    }
  }
}
