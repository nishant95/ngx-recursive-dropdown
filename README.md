# ngx-recursive-dropdown
[![npm version](https://badge.fury.io/js/ngx-recursive-dropdown.svg)](https://badge.fury.io/js/ngx-recursive-dropdown)

A dropdown list using ng-template and ng-container in a recursive manner.

Usage:
```html
<ngx-recursive-dropdown [baseList]="nestedListObject" 
    [displayLabel]="'label'" 
    [childListName]="'childListName'" 
    (lastSelected)="selectedObject($event)">
</ngx-recursive-dropdown>
```
