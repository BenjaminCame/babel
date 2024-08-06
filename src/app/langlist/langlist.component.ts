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
    console.log(newPhrase)
    this.http.post<JSON>('http://localhost:8080'+'/add/phrase', newPhrase).subscribe(phrase => {
      console.log('Updated config:', phrase);
    });

    // console.log(this.newNative, " ", this.newPhrase.newTarget)
    this.showForm = false
    // 
  }

  onSubmit(): void{
    // this.newphraseform.setControl(this.targetLanguage)
    console.log('newPhrase values', this.newphraseform.value);
    this.postNewPhrase(this.newphraseform.value)
    this.newphraseform.reset();
  }
}