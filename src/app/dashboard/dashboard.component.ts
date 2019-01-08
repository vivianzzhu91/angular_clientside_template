import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inDist: boolean = true;
  inMem: boolean = false;
  inPro: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDist(){
    this.inDist = true;
    this.inMem = false;
    this.inPro = false;
    console.log(this.inDist);
  }
  onMem(){
    this.inDist = false;
    this.inMem = true;
    this.inPro = false;
    console.log(this.inMem);
  }
  onPro(){
    this.inDist = false;
    this.inMem = false;
    this.inPro = true;
    console.log(this.inPro);
  }
  

}
