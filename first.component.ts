import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  public a:number;
  public b:number;
  public result:number;
  Add()
  {
    return this.result=Number.parseInt(this.a.toString()) + Number.parseInt(this.b.toString());
  }
  Clear()
  {
    return this.result=this.a=this.b=0;
  }

  ngOnInit(): void {
  }

}
