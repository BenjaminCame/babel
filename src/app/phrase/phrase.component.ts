import { Component , Input } from '@angular/core';


@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent {
  @Input() native:any
  @Input() target:any
}
