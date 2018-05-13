/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from './ngx-recursive-dropdown.component';
const styles_NgxRecursiveDropdownComponent:any[] = ([] as any[]);
export const RenderType_NgxRecursiveDropdownComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_NgxRecursiveDropdownComponent,data:{}});
function View_NgxRecursiveDropdownComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),0,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(null as any));
}
function View_NgxRecursiveDropdownComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(1,(null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (<any>_v.parent).context.$implicit[_co.displayLabel];
    _ck(_v,1,0,currVal_0);
  });
}
function View_NgxRecursiveDropdownComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),6,'option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(1,
      147456,(null as any),0,i1.NgSelectOption,[i0.ElementRef,i0.Renderer2,[8,(null as any)]],
      {value:[0,'value']},(null as any)),i0.ɵdid(2,147456,(null as any),0,i1.ɵq,[i0.ElementRef,
      i0.Renderer2,[8,(null as any)]],{value:[0,'value']},(null as any)),(_l()(),i0.ɵted(-1,
      (null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_NgxRecursiveDropdownComponent_4)),i0.ɵdid(5,16384,(null as any),
      0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.index;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _v.context.index;
    _ck(_v,2,0,currVal_1);
    const currVal_2:any = _v.context.$implicit[_co.displayLabel];
    _ck(_v,5,0,currVal_2);
  },(null as any));
}
function View_NgxRecursiveDropdownComponent_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),0,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any)))],
      (null as any),(null as any));
}
function View_NgxRecursiveDropdownComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),5,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),2,(null as any),View_NgxRecursiveDropdownComponent_6)),i0.ɵdid(3,
      540672,(null as any),0,i2.NgTemplateOutlet,[i0.ViewContainerRef],{ngTemplateOutletContext:[0,
          'ngTemplateOutletContext'],ngTemplateOutlet:[1,'ngTemplateOutlet']},(null as any)),
      i0.ɵpod(4,{listTest:0}),(_l()(),i0.ɵted(-1,(null as any),['\n    ']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _ck(_v,4,0,(<any>_v.parent).context.listTest[i0.ɵnov((<any>_v.parent),
        1).value][_co.childListName]);
    const currVal_1:any = i0.ɵnov((<any>(<any>_v.parent).parent),6);
    _ck(_v,3,0,currVal_0,currVal_1);
  },(null as any));
}
function View_NgxRecursiveDropdownComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(1,
      0,[['selectElem',1]],(null as any),9,'select',([] as any[]),(null as any),[[(null as any),
          'change']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('change' === en)) {
          const pd_0:any = ((<any>_co.detectChanges(_v.context.listTest[i0.ɵnov(_v,
              1).value])) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵeld(3,0,(null as any),(null as any),3,'option',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(4,147456,
          (null as any),0,i1.NgSelectOption,[i0.ElementRef,i0.Renderer2,[8,(null as any)]],
          {value:[0,'value']},(null as any)),i0.ɵdid(5,147456,(null as any),0,i1.ɵq,
          [i0.ElementRef,i0.Renderer2,[8,(null as any)]],{value:[0,'value']},(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n        --Select--\n      '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_NgxRecursiveDropdownComponent_3)),i0.ɵdid(9,
          802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    \n    '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NgxRecursiveDropdownComponent_5)),
      i0.ɵdid(13,16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n  ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = (0 - 1);
        _ck(_v,4,0,currVal_0);
        const currVal_1:any = (0 - 1);
        _ck(_v,5,0,currVal_1);
        const currVal_2:any = _v.context.listTest;
        _ck(_v,9,0,currVal_2);
        const currVal_3:any = ((_v.context.listTest && _v.context.listTest[i0.ɵnov(_v,
            1).value]) && _v.context.listTest[i0.ɵnov(_v,1).value][_co.childListName]);
        _ck(_v,13,0,currVal_3);
      },(null as any));
}
export function View_NgxRecursiveDropdownComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),7,'div',[['style',
      'text-align:center']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),2,(null as any),View_NgxRecursiveDropdownComponent_1)),
      i0.ɵdid(3,540672,(null as any),0,i2.NgTemplateOutlet,[i0.ViewContainerRef],{ngTemplateOutletContext:[0,
          'ngTemplateOutletContext'],ngTemplateOutlet:[1,'ngTemplateOutlet']},(null as any)),
      i0.ɵpod(4,{listTest:0}),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),
          i0.ɵand(0,[['testTemplate',2]],(null as any),0,(null as any),View_NgxRecursiveDropdownComponent_2)),
      (_l()(),i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        var _co:i3.NgxRecursiveDropdownComponent = _v.component;
        const currVal_0:any = _ck(_v,4,0,_co.baseList);
        const currVal_1:any = i0.ɵnov(_v,6);
        _ck(_v,3,0,currVal_0,currVal_1);
      },(null as any));
}
export function View_NgxRecursiveDropdownComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'ngx-recursive-dropdown',
      ([] as any[]),(null as any),(null as any),(null as any),View_NgxRecursiveDropdownComponent_0,
      RenderType_NgxRecursiveDropdownComponent)),i0.ɵdid(1,114688,(null as any),0,
      i3.NgxRecursiveDropdownComponent,[i0.ChangeDetectorRef],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const NgxRecursiveDropdownComponentNgFactory:i0.ComponentFactory<i3.NgxRecursiveDropdownComponent> = i0.ɵccf('ngx-recursive-dropdown',
    i3.NgxRecursiveDropdownComponent,View_NgxRecursiveDropdownComponent_Host_0,{baseList:'baseList',
        displayLabel:'displayLabel',childListName:'childListName'},{lastSelected:'lastSelected'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbmlzaGFudC9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL2xpYi9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL25neC1yZWN1cnNpdmUtZHJvcGRvd24uY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvbmlzaGFudC9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL2xpYi9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL25neC1yZWN1cnNpdmUtZHJvcGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9uaXNoYW50L25neC1yZWN1cnNpdmUtZHJvcGRvd24vbGliL25neC1yZWN1cnNpdmUtZHJvcGRvd24vbmd4LXJlY3Vyc2l2ZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbmlzaGFudC9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL2xpYi9uZ3gtcmVjdXJzaXZlLWRyb3Bkb3duL25neC1yZWN1cnNpdmUtZHJvcGRvd24uY29tcG9uZW50LnRzLk5neFJlY3Vyc2l2ZURyb3Bkb3duQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZXN0VGVtcGxhdGU7Y29udGV4dDp7IGxpc3RUZXN0OiBiYXNlTGlzdH1cIj48L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICN0ZXN0VGVtcGxhdGUgbGV0LWxpc3Q9XCJsaXN0VGVzdFwiPlxuICAgIDxzZWxlY3QgI3NlbGVjdEVsZW0gIChjaGFuZ2UpPVwiZGV0ZWN0Q2hhbmdlcyhsaXN0W3NlbGVjdEVsZW0udmFsdWVdKVwiPlxuICAgICAgPG9wdGlvbiBbdmFsdWVdPVwiLTFcIj5cbiAgICAgICAgLS1TZWxlY3QtLVxuICAgICAgPC9vcHRpb24+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB4IG9mIGxpc3Q7bGV0IGk9aW5kZXhcIiBbdmFsdWVdPVwiaVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInhbZGlzcGxheUxhYmVsXVwiPnt7eFtkaXNwbGF5TGFiZWxdfX08L3NwYW4+XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgICBcbiAgICA8ZGl2ICpuZ0lmPVwibGlzdCAmJiBsaXN0W3NlbGVjdEVsZW0udmFsdWVdICYmIGxpc3Rbc2VsZWN0RWxlbS52YWx1ZV1bY2hpbGRMaXN0TmFtZV1cIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZXN0VGVtcGxhdGU7Y29udGV4dDp7bGlzdFRlc3Q6IGxpc3Rbc2VsZWN0RWxlbS52YWx1ZV1bY2hpbGRMaXN0TmFtZV19XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbiIsIjxuZ3gtcmVjdXJzaXZlLWRyb3Bkb3duPjwvbmd4LXJlY3Vyc2l2ZS1kcm9wZG93bj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0NFO01BQUE7Ozs7b0JBT007TUFBQSx3RUFBOEI7YUFBQTs7SUFBQTtJQUFBOzs7O29CQURoQztNQUFBLCtFQUFBO01BQUE7TUFBQSwwQ0FBQTttQkFBQSxzREFBdUQ7TUFBQSwrQkFDckQ7TUFBQSw4REFBQTtNQUFBO01BQXdEOztJQURmO0lBQTNDLFdBQTJDLFNBQTNDO0lBQTJDO0lBQTNDLFdBQTJDLFNBQTNDO0lBQ1E7SUFBTixXQUFNLFNBQU47Ozs7b0JBS0Y7TUFBQTs7OztvQkFERjtNQUFBLHdFQUFxRjthQUFBLGlDQUNuRjtNQUFBLDRFQUFBO01BQUE7VUFBQTthQUFjLGlCQUEwRzs7O0lBQTFHO1FBQUE7SUFBQTtJQUFkLFdBQWMsbUJBQWQ7Ozs7b0JBWDJDLDhDQUM3QztNQUFBO1VBQUE7UUFBQTtRQUFBO1FBQXFCO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBckI7TUFBQSxnQ0FBc0U7TUFDcEU7VUFBQSxpRUFBQTtVQUFBO1VBQUEsMENBQUE7VUFBQTtNQUFxQixvRUFFWjtpQkFBQSxpQ0FDVDtVQUFBLDRFQUFBO1VBQUE7VUFBQSx1Q0FFUztVQUFBLGFBQ0Ysb0RBRVQ7aUJBQUE7YUFBQTtVQUFBLGlDQUVNOzs7UUFWSTtRQUFSLFdBQVEsU0FBUjtRQUFRO1FBQVIsV0FBUSxTQUFSO1FBR1E7UUFBUixXQUFRLFNBQVI7UUFLRztZQUFBO1FBQUwsWUFBSyxTQUFMOzs7O29CQVpKO01BQUE7TUFBQSxnQkFBK0IsNENBQzdCO01BQUE7YUFBQTtVQUFBO2FBQWMsaUJBQThFLDRDQUM1RjtpQkFBQTtNQWFjLDBDQUNWOzs7UUFmVTtRQUFBO1FBQWQsV0FBYyxtQkFBZDs7OztvQkNERjtNQUFBOzhDQUFBLFVBQUE7dUNBQUE7O1FBQUE7Ozs7OzsifQ==