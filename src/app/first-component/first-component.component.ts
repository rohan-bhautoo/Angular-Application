import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentModel } from '../models/component-model';
import { AppComponentService } from '../services/app-component.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit{
  @Input() ComponentModel!: ComponentModel;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onView() {
    this.router.navigateByUrl(`component/${this.ComponentModel.id}`);
  }
}
