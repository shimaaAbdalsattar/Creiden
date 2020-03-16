import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchKey: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate([`user`], {
      queryParams: {
        loginId: this.searchKey
      }
    });
  }

}
