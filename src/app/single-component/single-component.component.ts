import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentModel } from '../models/component-model';
import { AppComponentService } from '../services/app-component.service';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.scss'],
})
export class SingleComponentComponent implements OnInit {
  ComponentModel!: ComponentModel;

  constructor(
    private appComponentService: AppComponentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const componentId = +this.route.snapshot.params['id'];
    this.ComponentModel = this.appComponentService.getComponentById(componentId);
  }

  onAdd() {
    if (this.ComponentModel.number == -5) {
      this.appComponentService.compComponentById(
        this.ComponentModel.id,
        'Test'
      );
    } else {
      this.appComponentService.compComponentById(
        this.ComponentModel.id,
        'NotTest'
      );
    }
  }
}
