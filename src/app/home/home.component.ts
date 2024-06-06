import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iphrase } from '../phrases';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly ROOT_URL = 'http://23.23.85.100:8080/'; //local node js
 
  posts: any = []
  show = false
  constructor(private http: HttpClient){};

  getPost(myString: string){  
    console.log(this.ROOT_URL + myString)
    console.log('onclick event triggered  ' + myString)
    this.http.get<Iphrase[]>(this.ROOT_URL + myString)
      .subscribe(res => {
        console.log('res', res)
        this.posts = res
      } )
  };

  showInput(){
    this.show=true
  }
}
