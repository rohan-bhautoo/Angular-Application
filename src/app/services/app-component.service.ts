import { Injectable } from '@angular/core';
import { ComponentModel } from '../models/component-model';

@Injectable({
  providedIn: 'root',
})
export class AppComponentService {
  ComponentModel: ComponentModel[] = [
    {
      id: 1,
      title: 'Rohan',
      description: 'This is a god damn test!',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      number: 0,
      location: '',
    },
    {
      id: 2,
      title: 'Bhautoo',
      description: 'This is a god damn array!',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      number: 4,
      location: '',
    },
  ];

  getAllComponents(): ComponentModel[] {
    return this.ComponentModel;
  }

  getComponentById(componentId: number): ComponentModel {
    const component = this.ComponentModel.find(
      (component) => component.id === componentId
    );
    if (component) {
      return component;
    } else {
      throw new Error('NOT Found!');
    }
  }

  compComponentById(componentId: number, componentType: 'Test' | 'NotTest'): void {
    const component = this.getComponentById(componentId);
    componentType === 'Test' ? component.number++ : component.number--;
  }
}
