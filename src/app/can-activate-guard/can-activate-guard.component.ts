import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-can-activate-guard',
  templateUrl: './can-activate-guard.component.html',
  styleUrls: ['./can-activate-guard.component.css']
})
export class CanActivateGuardComponent implements OnInit, OnDestroy {
  sub: null | Subscription;
  paramId: null | number;
  paramTitle: null | string;

  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.paramTitle = null;
    this.paramId = null;
    this.sub = null;
  }

  hypenCaseToCapitalize(strToConvert: null | string): string {
    if (strToConvert) {
      const arr: string[] = strToConvert.split("-");
      let i: number;
      for (i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      return arr.join(" ");
    }
    return "";
  }

  ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe((params) => {
      //console.log(params);
      let tempVar: null | string = params.get('paramId');
      if (tempVar !== null) this.paramId = parseInt(tempVar);
      else this.paramId = null;
      this.paramTitle = this.hypenCaseToCapitalize(params.get('paramTitle'));
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['lazy-modul']);
  }
}
