import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-langlist',
  templateUrl: './langlist.component.html',
  styleUrls: ['./langlist.component.css'],
})

export class LanglistComponent {
  @Input() posts:any

  newNative: string
  newTarget: string

  showForm = false;

  onClickForm(){
    console.log("onclick", this.showForm)
    this.showForm = true;
  }

  // TODO need correctly post to back end
  postNewPhrase(){
    // this.http.post<Iphrase[]>(this.ROOT_URL + myString)
    // .subscribe(res => {
    //   console.log('res', res)
    //   this.posts = res
    // } )

    console.log(this.newNative, " ", this.newTarget)
    this.showForm = false
    // 
  }
}