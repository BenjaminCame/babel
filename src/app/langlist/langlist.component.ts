import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-langlist',
  templateUrl: './langlist.component.html',
  styleUrls: ['./langlist.component.css']
})
export class LanglistComponent {
  @Input() posts:any
}
