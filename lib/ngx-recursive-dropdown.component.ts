import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-recursive-dropdown',
  template:  `<ng-container *ngTemplateOutlet="testTemplate;context:{ listTest: baseList}">
              </ng-container>
              <ng-template #testTemplate let-list="listTest">
                <select #selectElem (change)="detectChanges(list[selectElem.value])">
                  <option [value]="-1">
                    --Select--
                  </option>
                  <option *ngFor="let x of list;let i=index" [value]="i">
                    <span *ngIf="x[displayLabel]">{{x[displayLabel]}}</span>
                  </option>
                </select>
              
                <div *ngIf="list && list[selectElem.value] && list[selectElem.value][childListName]">
                  <ng-container *ngTemplateOutlet="testTemplate;context:{listTest: list[selectElem.value][childListName]}"></ng-container>
                </div>
              </ng-template>`,
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
