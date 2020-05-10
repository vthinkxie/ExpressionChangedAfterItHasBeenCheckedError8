import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() color:string;
  @ViewChild(TemplateRef,{static:true}) template:TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
