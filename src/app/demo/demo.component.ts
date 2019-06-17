import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor() { }
   @Input() rating;
     @Input() inputName;
  ngOnInit() {
  }

onClick(number) {
  console.log(number);
}
}