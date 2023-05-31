import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit, OnDestroy {
  sub: null | Subscription;
  detailId: null | number;
  detailName: null | string;

  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.detailName = null;
    this.detailId = null;
    this.sub = null;
  }

  ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe((params) => {
      //console.log(params);
      let tempVar: null | string = params.get('id');
      if (tempVar !== null) this.detailId = parseInt(tempVar);
      else this.detailId = null;
      this.detailName = params.get('name');
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['second-component']);
  }
}
