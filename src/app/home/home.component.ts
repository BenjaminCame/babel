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
  show = false
  constructor(private http: HttpClient){
    this.http.get<any[]>(this.ROOT_URL + "getTables")
      .subscribe(res => {
        this.languages = res
    })
  };
  
  // Querey status of sql server
  getPost(targetLanguage: string){  
    console.log(this.ROOT_URL + targetLanguage)
    console.log('onclick event triggered  ' + targetLanguage)
    this.http.get<Iphrase[]>(this.ROOT_URL + targetLanguage)
      .subscribe(res => {
        console.log('res', res)
        this.posts = res
      } )
  };

  showInput(){
    this.show=true
  }
}
