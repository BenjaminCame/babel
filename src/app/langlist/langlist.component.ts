import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-langlist',
  templateUrl: './langlist.component.html',
  styleUrls: ['./langlist.component.css'],
})

export class LanglistComponent {
  @Input() posts:any
  @Input() targetLanguage:string

  constructor(
    private http: HttpClient,
    private fromBuilder: FormBuilder,
  ){};

  // TODO move this to a global positon in the webpage
  readonly ROOT_URL = 'http://23.23.85.100:8080/'; //local node js

  newphraseform = this.fromBuilder.group({
    language: "",
    newNative: "",
    newTarget: ""
  });

  showForm = false;

  onClickForm(){
    console.log("onclick", this.showForm)
    this.showForm = true;
  }

  // TODO need correctly post to back end
  postNewPhrase(newPhrase: object){
    this.http.post<JSON>(this.ROOT_URL+'add/phrase', newPhrase).subscribe(phrase => {
      console.log('Updated config:', phrase);
    });
    this.showForm = false
  }

  deleteLanguage(){
    console.log("test")
    this.http.delete<JSON>(this.ROOT_URL+'deletelang/'+this.targetLanguage).subscribe( res => {
      console.log('Updated config:',res);
    });
  }

  onSubmit(): void{
    this.newphraseform.controls['language'].setValue(this.targetLanguage)
    console.log('newPhrase values', this.newphraseform.value);
    this.postNewPhrase(this.newphraseform.value)
    this.newphraseform.reset();
  }
}