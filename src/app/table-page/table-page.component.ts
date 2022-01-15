import { Component, OnInit } from '@angular/core';
import tableData from '../../assets/mocks/strategy.json'
 export interface TableRecord{

  data: Data[];
}
 export interface Data{
  strategies:string,
    period:string,
    price:number,
    geographies:string,
    fundSizes:string,
    ratings:string,
    vintage:string,
    timePeriod:string
}
    
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  DisplayDataFlag: boolean=false;

  constructor() { }
  data: TableRecord = tableData;
  ngOnInit(): void {
    console.log(this.data.data[0].period
      );
    
  }
    
  DisplayData(){
    this.DisplayDataFlag=true;
  }

}
