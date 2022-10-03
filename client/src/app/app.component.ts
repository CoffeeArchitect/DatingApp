import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  user: any;
  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: resoponse => this.user = resoponse,
      error: error => console.log(error)
    })
  }
}
