import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { flatMap, startWith, switchMap } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ContentChildren(ChildComponent) listOfChildComponent:QueryList<ChildComponent>;

  constructor() {
  }

  ngOnInit(): void {

  }
}
