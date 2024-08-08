import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iphrase } from '../phrases';
// import { language } from '../language';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly ROOT_URL = 'http://23.23.85.100:8080/'; //local node js
 
  posts: any = []
  languages: any = []
  tempLanguage: any
  show = false
  constructor(private http: HttpClient){
    this.http.get<any[]>(this.ROOT_URL + "getTables")
      .subscribe(res => { 
        this.languages = res
    })
  };
  
  // Querey status of sql server
  getLanguagePhrases(targetLanguage: string){  
    this.tempLanguage = targetLanguage
    this.http.get<Iphrase[]>(this.ROOT_URL + "getlanguagephrases/" + targetLanguage)
      .subscribe(res => {
        console.log('res', res)
        this.posts = res
      } )
  };

  createNewLanguage(){
    let temp:string = (document.getElementById("newlanguage") as HTMLInputElement).value
    var body = { newLanguage: temp }
    console.log(body)
    this.http.post<any>(this.ROOT_URL+"newLangauage",body).subscribe(res =>{
      console.log(res)
    })
  }

  showInput(){
    this.show=true
  }
}
