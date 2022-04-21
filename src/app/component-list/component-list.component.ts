import { Component,  OnInit } from '@angular/core';
import { ComponentModel } from '../models/component-model';
import { AppComponentService } from '../services/app-component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {
  ComponentModel!: ComponentModel[];

  constructor(private appComponentService: AppComponentService) {

  }

  ngOnInit(): void {
      this.ComponentModel = this.appComponentService.ComponentModel;
  }
}
