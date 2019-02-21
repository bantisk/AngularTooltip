import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-tool-tip-component',
  templateUrl: './custom-tool-tip-component.component.html',
  styleUrls: ['./custom-tool-tip-component.component.css']
})
export class CustomToolTipComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text = '';

}
