import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastr: ToastrService, ) { }
  data: TableRecord = tableData;
  ngOnInit(): void {
    this.toastr.success("Details Submitted SuccessFully",'',{closeButton: true,timeOut: 2000,positionClass: 'toast-top-full-width'});
      return ;
    console.log(this.data.data[0].period
      );
    
  }
    
  DisplayData(){
    this.DisplayDataFlag=true;
  }

}
