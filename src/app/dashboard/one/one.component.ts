import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OneService} from "../../shared/one.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";



@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})

export class OneComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'birth_year', 'created', 'edited'];
  dataSource: MatTableDataSource<any> | any; // позволяет определить, что dataSource является источником для нашей таблицы

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private oneService: OneService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.oneService.fetchPeople().subscribe(res => {
      const result = res.results;
      let arr: any[] = [];
     result.forEach((el: any) =>
      {
        const obj = {
          name: el.name,
          birth_year: el.birth_year,
          created: new Date(el.created).toLocaleDateString(),
          edited: new Date(el.edited).toLocaleDateString()
        };
        arr.push(obj);
      });
      this.dataSource = new MatTableDataSource<any>(arr);
      this.dataSource.paginator = this.paginator;
    });
  }

}
