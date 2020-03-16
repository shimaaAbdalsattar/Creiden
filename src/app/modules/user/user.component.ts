import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpQueryService } from 'src/app/shared/services/http-query.service';
import { UserModel } from '../../shared/models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userLoginId: string;
  public userData: UserModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private queryService: HttpQueryService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.userLoginId = queryParams.loginId;
    });
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    const endPoint = `/users/${this.userLoginId}`;
    this.queryService.setUrl(endPoint);
    this.queryService.get().subscribe(respose => {
      this.userData = respose;
    });
  }

  goBack(){
    this.router.navigate([`search`]);
  }

}
